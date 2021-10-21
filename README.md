<h1 align="center"> CDMT Team: Project Feed Jeff </h1>

![guy-with-ramen](readme-img/ramen-guy.png)

## Summary
Jeff, a lovely young gentleman has just started his first semester at University of Texas at San Antonio (UTSA). Like many first-time students, a college budget is no joke, especially when you'e a freshman living in the dorms, like Jeff here. Jeff is currently attending UTSA and is confined to a tiny dorm room with no toaster, a little mini fridge that barely works, and a microwave that’s older than his parents. Jeff often wonders, "How can I stretch my $20 dollars to next week?" 

By saying the magic words, "Like a good neightbor, CDMT is there!"

The Project 3: Feed Jeff Team decided to create a prototype website to help Jeff sruvive on his limited budget! Our initial website is strictly a way of measuring different prices of the most essential items for every students' diet: <b>Ramen</b>, <b>Pizza</b>, and <b>Mac and Cheese</b>. This prototype is currently only designed to handle two different store databases: <b>Walmart</b> located at 11210 Potranco Rd, San Antonio, TX 78253 and <b>WholeFoods</b> located at 255 E Basse Rd
San Antonio, TX. We are in very heated debates with other stores that all currently in a bidding war to use our website and boost their business. 

<p align="center">
<img src= "http://cdn.abclocal.go.com/content/wpvi/images/cms/513058_1280x720.jpg"  width="300" height="200">
<img src= "http://blog.logomyway.com/wp-content/uploads/2017/02/walmart-store.jpg" width="350" height="200">
</p>
                                                                                                                                    
<h1 align="center"> Methodology </h1>

## Data Collection
We started with a scrape of the Walmart and WholeFoods databases. After scraping for our desired food items we ended up with 206 items for Jeff to choose from. We then took the data from the different websites and gathered them into an SQLite database. We split the columns using <b>Brand</b>, <b>Name</b>, <b>Price</b> , <b>Type</b>, and <b>Store</b> so that Jeff would be able to specifically choose which products he'd like to see through different visualizations. 

Walmart Source URL: https://www.walmart.com/browse/shop-by-brand/food-grocery/3734780_7455738

WholeFoods Source URL: https://www.wholefoodsmarket.com/products

## Creating Visualizations
After initializing a Flask-powered API, we used Heroku to deploy the webpage to the cloud so that Jeff would be able to use the prototype product as soon as possible. Project: Feed Jeff decided to use a combination of <b>plotly</b> and <b>charts.js</b> to create the visualizations on the webpage. Our team believes that utilizing these two libraries in combination would be the best way of achieving the most effective visualizations for Jeff to make his selections. 

## Limitations 
* Unable to scrape more websites due to:
  * Time Constraints 
  * Robot wall that protected against scraping 
  * API's had payment or authority requirements

## Future Goals 
* Project: Feed Jeff has several ideas in order to improve Jeff's culinary experience: 
  * Add more options for stores and foods
  * Add nutritional value of products
  * Create a Machine Learning Enviroment in order to better log Jeff's choices and provide suggestions

<h1 align="center">Project 3 Team</h1>
<img src= "https://media.giphy.com/media/C3O6NJeqH9nKjKrAJy/giphy.gif" align="left" width="300px" padding="10px"> No Need to Wait Any Longer! It's Time to Showcase our Protoype App!</br></br>
  <b>
  - Celenia Chapa
  - Tyler Cutrer
  - Matthew Villareal
  - Daniella Mayoral
  </b>
<br clear="left"/>
