<h1 align="center"> Project 3: Feed Jeff </h1>

![guy-with-ramen](readme-img/ramen-guy.png)

## Summary
A college budget is no joke, especially when you'e a freshman living in the dorms, like Jeff here. Jeff is confined to a tiny box with no toaster, a little mini fridge that he fills with vodka and wine, and a microwave that’s older than his parents. Jeff often wonders, "How can I stretch my $20 dollars to next week?" 

The Project 3 Food Team decided to create a prototype website to help Jeff sruvive on his limited budget! Our initial website is strictly a way of measuring different prices of the most essential items for every students' diet: <b> Ramen </b>, <b> Pizza </b>, and <b> Mac and Cheese </b>. This prototype is currently only designed to handle two different store databases: <b> Walmart </b> and <b> WholeFoods </b>. We are in very heated debates with other stores that all currently in a bidding war to use our website and boost their business. 


<p align="center">
<img src= "http://cdn.abclocal.go.com/content/wpvi/images/cms/513058_1280x720.jpg"  width="400" height="300">
<img src= "http://blog.logomyway.com/wp-content/uploads/2017/02/walmart-store.jpg" width="500" height="300">
</p>
                                                                                                                                    
<h1 align="center"> Methodology </h1>

## Data Collection
We started with a scrape of the Walmart and WholeFoods databases. After scraping for our desired food items we ended up with 206 items for Jeff to choose from. We then took the data from the different websites and gathered them into an SQLite database. We split the columns using <b> Brand </b>, <b> Name </b>, <b> Price </b> , <b> Type </b>, and <b> Store </b> so that Jeff would be able to specifically choose which products he'd like to see. 

## Utilizing Charts.js
After using Flask to create an API we used Heroku to deploy the webpage to the cloud so that Jeff would be able to use the prototype product as soon as possible. 

## Creating Visualizations
Project: Feed Jeff decided to use a combination of plotly and charts.js to create the visualizations on the webpage. Our team believe that utilizing these two libraries in combination would be the best way at achieving the most effective visualizations for Jeff to make his selections. 

<h1 align="center"> Limitations </h1>
* Unable to scrape more websites due to: 
  * Time Constraints 
  * Robot wall that protected against scraping 
  * API's had payment or authority requirements


<h1 align="center">Project 3 Team</h1>

<b>
&emsp;  - Celenia Chapa
&emsp;  - Tyler Cutrer
&emsp;  - Matthew Villareal
&emsp;  - Daniella Mayoral
  </b>
