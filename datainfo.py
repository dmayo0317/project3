from sqlalchemy import create_engine
import pandas as pd
from sqlalchemy.orm import Session

connect_string = "sqlite:///Grocery_tables.db"

engine = create_engine(connect_string)

def grocery_type(type):
    session = Session(engine)

    sql = f"""
    SELECT * FROM Whole_foods_database 
    WHERE Type = '{type}'
    """  
        
    df = pd.read_sql(sql, session.connection())

    session.close()  
    return df.to_dict(orient="records") 


def grocery_store(type, store='all'):
    session = Session(engine)

    if store == 'all':

        sql = f"""
        SELECT * FROM Whole_foods_database 
        WHERE Type = '{type}'
        """  
    else:
        sql = f"""
        SELECT * FROM Whole_foods_database 
        WHERE Type = '{type}'
        And store = '{store}'
        """    
        
    df = pd.read_sql(sql, session.connection())

    session.close()  
    return df.to_dict(orient="records")    



if __name__ == '__main__':
    results = grocery_type("Ramen")
    print(results) 
