from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from backend.routes import auth as auth_blueprint

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)

    app.config['SECRET_KEY'] = ''#secret key goes here
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'

    db.init_app(app)

    app.register_blueprint(auth_blueprint)


    return app