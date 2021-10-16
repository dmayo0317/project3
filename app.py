# dependencies
import pandas as pd
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from flask import Flask, jsonify, render_template

#################################################
# Database Setup
#################################################
connect_string = "sqlite:///Grocery_tables.db"



#################################################
# Flask Setup
#################################################
application = Flask(__name__)


#################################################
# Flask Routes
#################################################


@application.route("/")
def welcome(): 
    return render_template("index.html")  


@application.route("/api/foods")
def api():
    engine = create_engine(connect_string)
    session = Session(engine)

    sql = f"""
    SELECT * FROM Whole_foods_database 
    WHERE Type = 'Pizza'
    """

    df = pd.read_sql(sql, session.connection())
    print(df)

    session.close()  
    return jsonify(df.to_dict(orient="records"))


if __name__ == '__main__':
    application.run(debug=True)