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


def all_types():
    session = Session(engine)

    sql = '''
    SELECT DISTINCT Type FROM grocery_table;
    '''  
        
    df = pd.read_sql(sql, session.connection())
    session.close()  
    return df.to_dict(orient="records") 


## This is our query for the selector for pizza/macaroni/ramen (don't remove)
def filter_type(query):
    session = Session(engine)

    sql = f'''
    SELECT * FROM grocery_table WHERE Type = '{query}' AND Store = 'Walmart' ORDER BY RANDOM() LIMIT 5;
    '''  
        
    df_wm = pd.read_sql(sql, session.connection())

    sql = f'''
    SELECT * FROM grocery_table WHERE Type = '{query}' AND Store = 'Whole foods' ORDER BY RANDOM() LIMIT 5;
    '''  
        
    df_wf = pd.read_sql(sql, session.connection())

    df = pd.concat([df_wm, df_wf], axis=0)

    session.close()  
    return df.to_dict(orient="records")



## Query for Pricing
def price(select):
    session = Session(engine)

    select_int = int(select)
    betweens = ["BETWEEN 0 AND 5", "BETWEEN 5 AND 10", "BETWEEN 10 AND 15"]
    current_between = betweens[select_int]
    
    sql = f'''
    SELECT Price, Name, Type, Store, Brand
    FROM grocery_table 
    WHERE Price {current_between}
    Order By Price ASC
    '''

    print(sql)
    
    df= pd.read_sql(sql, session.connection())
    session.close()
    results = df.to_dict(orient="records")    
    return results       
   


if __name__ == '__main__':
    results =  price(2)
    print(results)
    
