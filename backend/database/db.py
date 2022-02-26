#db for the users
#from pymongo import MongoClient
#from pymongo import MongoClient
#import pymongo
#from pymongo_test_insert import get_database


#client = MongoClient()
#def db_account():

    #CONNECTION_STRING = "mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/myFirstDatabase"

    #client = MongoClient(CONNECTION_STRING)
    #dbname = get_database()
    #collection_SignUp = dbname["account_signup"]

    #return collection_SignUp
from . import db, create_app

db.create_all(app=create_app())