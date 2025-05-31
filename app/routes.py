from flask import Blueprint, render_template, request, redirect, url_for, session

main = Blueprint('main', __name__)


@main.route('/')
def home():
    print("Session state:", dict(session))
    if not session.get('authenticated'):
        return redirect(url_for('auth.login'))
    return render_template('strategies.html')

@main.route('/portfolio')
def portfolio():
    if not session.get('authenticated'):
        return redirect(url_for('auth.login'))
    return render_template('portfolio.html')


@main.route('/strategy/<strategy_id>')
def strategy_details(strategy_id):
    # later you can fetch full details based on strategy_id
    return render_template('strategy_detail.html', strategy_id=strategy_id)
