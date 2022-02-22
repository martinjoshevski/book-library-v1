from flask import Flask, request, jsonify
from backend.models.filters import price_under500, price_above500
from backend.database import db

app = Flask(__name__)

@app.route("/")
def home():
    return "Hey, retard"

@app.route("/sigup", methods=["GET", "POST"]) 
def signup(id,username,password):
    global collection_SignUp

    for i in range(100):
        post = {f"_id":i+1, "name": {username}, "password":{password}}

    collection_SignUp.insert_one(post)

    return collection_SignUp

@app.route("/login", methods=["GET","POST"])
def login(id,username,password):
    #here needs to check the db and match the input with the db
    pass

if __name__ == "__main__":
    app.run(debug=True)