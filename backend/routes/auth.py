from flask import Flask, request, Blueprint, flash
from backend.models import User
from . import db

app = Flask(__name__)

@app.route("/")
def home():
    return "Hey, retard"

@app.route('/signup', methods=['POST'])
def signup_post():

    email = request.form.get('email')
    name = request.form.get('name')
    password = request.form.get('password')

    user = User.query.filter_by(email=email).first() # if it retruns something that means that that email is already in the db

    if user:
        return # redirect to sign up

    new_user = User(email=email, name=name, password=password(password, method='sha256'))

    # add the new user to the database
    db.session.add(new_user)
    db.session.commit()

    return # redirect to login page

@app.route('/login', methods=['POST'])
def login_post():
    email = request.form.get('email')
    password = request.form.get('password')
    remember = True if request.form.get('remember') else False

    user = User.query.filter_by(email=email).first()

    # check if the user actually exists
    if not user or not password(user.password, password):
        flash('Please check your login details and try again.')
        return # redirect to login page


    return  # all right passes of input 