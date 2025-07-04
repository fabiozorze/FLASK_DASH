from flask import Blueprint, render_template, request, redirect, url_for, session, send_from_directory
import os
import requests

main = Blueprint('main', __name__)

# React dev server URL
REACT_DEV_SERVER = 'http://localhost:5173'

@main.route('/')
def home():
    try:
        # Proxy to React dev server
        response = requests.get(f'{REACT_DEV_SERVER}/')
        return response.content, response.status_code, dict(response.headers)
    except requests.exceptions.ConnectionError:
        return "React dev server not running. Please start it with 'npm run dev' in the frontend directory.", 503

@main.route('/portfolio')
def portfolio():
    if not session.get('authenticated'):
        return redirect(url_for('auth.login'))
    return render_template('portfolio.html')


@main.route('/strategy/<strategy_id>')
def strategy_details(strategy_id):
    # later you can fetch full details based on strategy_id
    return render_template('strategy_detail.html', strategy_id=strategy_id)

@main.route('/<path:path>')
def serve_react(path):
    try:
        # Proxy to React dev server
        response = requests.get(f'{REACT_DEV_SERVER}/{path}')
        return response.content, response.status_code, dict(response.headers)
    except requests.exceptions.ConnectionError:
        return "React dev server not running. Please start it with 'npm run dev' in the frontend directory.", 503
