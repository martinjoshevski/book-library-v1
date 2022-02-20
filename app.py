from flask import Flask, render_template
from backend.models.filters import price_under500, price_above500
from backend.models.book import books

app = Flask(__name__)

@app.route("/")
def home():
    # use the filter() to filter the books for: price, tags
    #books_under500 = filter(price_under500, books)
    #for under500 in books_under500:
        #print(dict(under500)["Title"])
    
    #books_above500 = filter(price_above500, books)
    #for over500 in books_under500:
        #print(dict(under500)["Title"])
    
    return "Hey"

@app.route("/signup", methods=["GET", "POST"])
def signup():
    user = user.requests.form.get["user"]
    password = password.requets.form.get["password"]

    acconut = user, password

    acconut.append() #to add the user to the database   backend/database/db.py

    return render_template("signup.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    # Checking the acoount from the database with the input

    return render_template("login.html")


if __name__ == "__main__":
    app.run(debug=True)