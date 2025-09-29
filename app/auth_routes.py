from datetime import datetime
import email
import uuid
from boto3.dynamodb.conditions import Key
from flask import Blueprint, render_template, request, session, redirect, url_for, jsonify
import boto3
import pyotp
from werkzeug.security import generate_password_hash, check_password_hash

auth = Blueprint('auth', __name__)

dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
users_table = dynamodb.Table('users')

"""
def get_user():
    email = session.get('email')
    if not email:
        return None
    response = users_table.get_item(Key={'email': email})
    return response.get('Item')
"""

# Updated get_user function
def get_user():
    user_id = session.get('user_id')  # Changed from 'email' to 'user_id'
    if not user_id:
        return None
    response = users_table.get_item(Key={'user_id': user_id})
    return response.get('Item')

def get_user_by_email(email):
    """Helper function to find user by email using GSI"""
    response = users_table.query(
        IndexName='email-index',
        KeyConditionExpression=Key('email').eq(email)
    )
    items = response.get('Items', [])
    return items[0] if items else None

"""
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
"""


# Updated register function
@auth.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        cpf = data.get('cpf')
        password = data.get('password')
        
        # Check if email already exists using GSI
        existing_user = get_user_by_email(email)
        if existing_user:
            return jsonify({"error": "User already exists"}), 400

        # Generate UUID for new user
        user_id = str(uuid.uuid4())
        
        user = {
            'user_id': user_id,  # New primary key
            'name': name,
            'email': email,
            'cpf': cpf,
            'password_hash': generate_password_hash(password),
            'totp_secret': pyotp.random_base32(),
            'created_at': datetime.utcnow().isoformat(),
            'status': 'pending_2fa'  # Track registration status
        }
        
        users_table.put_item(Item=user)
        session['user_id'] = user_id  # Store user_id instead of email
        return jsonify({"message": "Register successful", "needs_2fa_setup": True}), 200
        
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

"""
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
"""
# Updated login function
@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        
        # Find user by email using GSI
        user = get_user_by_email(email)
        if not user or not check_password_hash(user['password_hash'], password):
            return jsonify({"error": "Invalid credentials"}), 403
            
        session.permanent = False
        session['user_id'] = user['user_id']  # Store user_id instead of email
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


# New delete account function
@auth.route('/delete-account', methods=['DELETE'])
def delete_account():
    """Delete user account - perfect for canceling 2FA setup"""
    user_id = session.get('user_id')
    if not user_id:
        return jsonify({"error": "User not authenticated"}), 401
    
    try:
        # Delete using primary key (much cleaner!)
        users_table.delete_item(Key={'user_id': user_id})
        session.clear()
        return jsonify({"message": "Account deleted successfully"}), 200
    except Exception as e:
        return jsonify({"error": f"Failed to delete account: {str(e)}"}), 500
