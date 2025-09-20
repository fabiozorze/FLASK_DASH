import email
from flask import Blueprint, render_template, request, session, redirect, url_for, jsonify
import boto3
import pyotp
from werkzeug.security import generate_password_hash, check_password_hash

auth = Blueprint('auth', __name__)

dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
users_table = dynamodb.Table('users')

def get_user():
    email = session.get('email')
    if not email:
        return None
    response = users_table.get_item(Key={'email': email})
    return response.get('Item')

@auth.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        data = request.get_json()
        print("Received data:", data)
        name = data.get('name')
        email = data.get('email')
        password = data.get('password')
        # name = request.form['name']
        # email = request.form['email']
        # password = request.form['password']
        response = users_table.get_item(Key={'email': email})
        if 'Item' in response:
            return "User already exists", 400

        user = {
            'name': name,
            'email': email,
            'password_hash': generate_password_hash(password),
            'totp_secret': pyotp.random_base32()
        }
        users_table.put_item(Item=user)
        session['email'] = email
        return jsonify({"message": "Register successful", "needs_2fa_setup":True}), 200
        #return redirect(url_for('auth.setup_2fa'))
    return render_template('auth/register.html')

@auth.route('/setup-2fa')
def setup_2fa():
    user = get_user()
    if not user:
        return redirect(url_for('auth.login'))
    totp = pyotp.TOTP(user['totp_secret'])
    uri = totp.provisioning_uri(user['email'], issuer_name='Invest.IA')
    return render_template('auth/qrcode.html', uri=uri)

"""End point for the QR code"""
@auth.route('/get-2fa-uri')
def get_2fa_uri():
    user = get_user()
    if not user:
        return jsonify({"error": "User not authenticated"}), 401

    totp = pyotp.TOTP(user['totp_secret'])
    uri = totp.provisioning_uri(user['email'], issuer_name='Invest.IA')

    return jsonify({
        "uri": uri,
        "secret_key": user['totp_secret'],
    }), 200


@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        data = request.get_json()
        print("Received data:", data)
        email = data.get('email')
        password = data.get('password')
        # email = request.form['email']
        # password = request.form['password']
        response = users_table.get_item(Key={'email': email})
        print("DynamoDB response:", response)
        user = response.get('Item')
        if not user or not check_password_hash(user['password_hash'], password):
            print("Invalid credentials for:", email)
            return "Invalid credentials", 403
        session.permanent = False
        session['email'] = email
        return redirect(url_for('auth.verify_2fa'))
    return render_template('auth/login.html')

@auth.route('/verify-2fa', methods=['GET', 'POST'])
def verify_2fa():
    user = get_user()
    if not user:
        session.clear()
        return redirect(url_for('auth.login'))

    if request.method == 'POST':
        # code = request.form['code']
        data = request.get_json()
        code = data.get('code')
        totp = pyotp.TOTP(user['totp_secret'])
        if totp.verify(code):
            session.permanent = False
            session['authenticated'] = True
            session.modified = True
            session['name'] = user.get('name')
            # return redirect(url_for('main.home'))
            print("✅ 2FA verified. Session now:", dict(session))
            return jsonify({"message": "2FA verified"}), 200
        print("✅ 2FA passed. Session now:", dict(session))
        return "Invalid 2FA code", 403

    return render_template('auth/verify_2fa.html')
    



@auth.route('/profile', methods=['GET'])
def get_profile():
    """Get comprehensive user profile information"""
    user = get_user()
    if not user:
        return jsonify({"error": "User not authenticated"}), 401
    
    # Remove sensitive information before sending to frontend
    profile_data = {
        "name": user.get('name'),
        "email": user.get('email'),
        "authenticated": session.get('authenticated', False),
        "has_2fa": bool(user.get('totp_secret')),
        "session_info": {
            "email": session.get('email'),
            "name": session.get('name'),
            "authenticated": session.get('authenticated', False)
        }
    }
    
    return jsonify(profile_data), 200

@auth.route('/user-info', methods=['GET'])
def get_user_info():
    """Alternative endpoint for getting all user information"""
    if not session.get('authenticated'):
        return jsonify({"error": "Not authenticated"}), 401
    
    user = get_user()
    if not user:
        return jsonify({"error": "User not found"}), 404
    
    # Comprehensive user information
    user_info = {
        "profile": {
            "name": user.get('name'),
            "email": user.get('email')
        },
        "security": {
            "has_2fa_enabled": bool(user.get('totp_secret')),
            "password_last_changed": user.get('password_last_changed'),  # Add this field if tracking
        },
        "session": {
            "authenticated": session.get('authenticated', False),
            "session_email": session.get('email'),
            "session_name": session.get('name'),
            "permanent": session.permanent
        },
        "account": {
            "created_at": user.get('created_at'),  # Add this field if tracking
            "last_login": user.get('last_login'),  # Add this field if tracking
            "account_status": user.get('status', 'active')  # Add this field if tracking
        }
    }
    
    return jsonify(user_info), 200


@auth.route('/cancel-2fa', methods=['DELETE'])
def cancel_2fa():
    user = get_user()
    if not user:
        return jsonify({"error": "User not authenticated"}), 401
        
    users_table.update_item(Key={'email': user['email']}, UpdateExpression='SET totp_secret = :empty', ExpressionAttributeValues={':empty': ''})
    return jsonify({"message": "2FA canceled"}), 200

@auth.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('auth.login'))
