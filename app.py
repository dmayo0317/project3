# dependencies
import pandas as pd
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from flask import Flask, jsonify, render_template

#################################################
# Database Setup
#################################################
connect_string = "sqlite:///Grocery_tables.db"

engine = create_engine(connect_string)

#################################################
# Flask Setup
#################################################
application = Flask(__name__)


#################################################
# Flask Routes
#################################################

@application.route("/")
def welcome():
    session = Session(engine)

    sql = f"""
    SELECT * FROM Whole_foods_database 
    WHERE Type = 'Pizza'
    """

    df = pd.read_sql(sql, session.connection())

    session.close()  
    return df.to_dict(orient="records")

if __name__ == '__main__':
    welcome