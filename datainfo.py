from sqlalchemy import create_engine
import pandas as pd
from sqlalchemy.orm import Session

connect_string = "sqlite:///Grocery_database.db"

engine = create_engine(connect_string)


## Beginning the definitions of queries

def grocery_brand():
    session = Session(engine)

    sql = '''
    SELECT Brand, Name, Price, Store FROM grocery_table;
    '''  
        
    df = pd.read_sql(sql, session.connection())
    session.close()  
    return df.to_dict(orient="records")


def grocery_type():
    session = Session(engine)

    sql = '''
    SELECT Type, Brand, Price, Store FROM grocery_table;
    '''  
        
    df = pd.read_sql(sql, session.connection())
    session.close()  
    return df.to_dict(orient="records")    


   



if __name__ == '__main__':
    results =  grocery_brand("Kraft")
