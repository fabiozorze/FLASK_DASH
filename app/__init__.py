from flask import Flask
from datetime import timedelta
from .routes import main
from .auth_routes import auth
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.secret_key = 'secret-key'

    # 🔐 Session config to force logout on browser close
    #app.permanent_session_lifetime = timedelta(seconds=600)  # session expires immediately
    app.config['SESSION_REFRESH_EACH_REQUEST'] = False     # do not extend session
    app.config['SESSION_COOKIE_HTTPONLY'] = True
    app.config['SESSION_COOKIE_SAMESITE'] = 'Lax'

    app.register_blueprint(main)
    app.register_blueprint(auth, url_prefix='/auth')

    return app
