from flask import Blueprint, render_template, request, session, redirect, url_for, jsonify
import boto3
import pyotp
from werkzeug.security import generate_password_hash, check_password_hash

auth = Blueprint('auth', __name__)

dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
users_table = dynamodb.Table('users')

@auth.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']
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
        return redirect(url_for('auth.setup_2fa'))
    return render_template('auth/register.html')

@auth.route('/setup-2fa')
def setup_2fa():
    user = get_user()
    if not user:
        return redirect(url_for('auth.login'))
    totp = pyotp.TOTP(user['totp_secret'])
    uri = totp.provisioning_uri(user['email'], issuer_name='Invest.IA')
    return render_template('auth/qrcode.html', uri=uri)


@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        response = users_table.get_item(Key={'email': email})
        user = response.get('Item')
        if not user or not check_password_hash(user['password_hash'], password):
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
        code = request.form['code']
        totp = pyotp.TOTP(user['totp_secret'])
        if totp.verify(code):
            session.permanent = False
            session['authenticated'] = True
            session.modified = True
            session['name'] = user.get('name')
            return redirect(url_for('main.home'))
        print("✅ 2FA passed. Session now:", dict(session))
        return "Invalid 2FA code", 403

    return render_template('auth/verify_2fa.html')



@auth.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('auth.login'))

# API routes created for frontend
@auth.route('/api/test')
def api_test():
    return jsonify({'message': 'API test route working!'})

@auth.route('/api/login', methods=['POST'])
def api_login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    response = users_table.get_item(Key={'email': email})
    user = response.get('Item')
    if not user or not check_password_hash(user['password_hash'], password):
        return jsonify({'success': False, 'error': 'Invalid credentials'}), 403
    # You can add session logic or JWT here if needed
    return jsonify({'success': True, 'message': 'Login successful', 'name': user.get('name')})

def get_user():
    email = session.get('email')
    if not email:
        return None
    response = users_table.get_item(Key={'email': email})
    return response.get('Item')
#--------------------------------