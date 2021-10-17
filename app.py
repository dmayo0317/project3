# dependencies
import pandas as pd
# from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from flask import Flask, jsonify, render_template
import datainfo
#################################################
# Database Setup
#################################################
data = "sqlite:///Grocery_database.db"

info = datainfo

#################################################
# Flask Setup
#################################################
application = Flask(__name__)


#################################################
# Flask Routes
#################################################


@application.route("/")
def welcome(): 
    return render_template("index.html", food_info=info)  

@application.route("/api/v1.0")
def show_apis():
    """List all available api routes."""
    return (
        f"<h4>Available Routes:</h4>"
        f'<a href="/api/v1.0/brand">/api/v1.0/brand</a><br/>'       
        f'<a href="/api/v1.0/price">/api/v1.0/price</a><br/>' 
        f'<a href="/api/v1.0/type">/api/v1.0/type</a><br/>' 
        f'<a href="/api/v1.0/store">/api/v1.0/store</a><br/>' 
        f'<a href="/"><h4>Back</h4></a><br/>' 
    )     


@application.route("/api/v1.0/brand")
def grocery_brand():
    return jsonify(info.grocery_brand())

@application.route("/api/v1.0/type")
def grocery_type():
    return jsonify(info.grocery_type())    


# @application.route("/api/v1.0/price")
# def grocery_brand():
#     return jsonify(info.grocery_brand())



# @application.route("/api/v1.0/store")
# def grocery_brand():
#     return jsonify(info.grocery_brand())


if __name__ == '__main__':
    application.run(debug=True)