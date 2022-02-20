from flask import Flask, request, jsonify
from backend.models.filters import price_under500, price_above500
from backend.models.manga import db

app = Flask(__name__)

@app.route("/hey")
def home():
    return "Hey, retard"

@app.route("/add")
def adding_manga():

    return



if __name__ == "__main__":
    app.run(debug=True)