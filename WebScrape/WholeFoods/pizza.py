# Dependencies
import os
from bs4 import BeautifulSoup as bs
import urllib


url = urllib.request.urlopen('file:///C:/Users/Matt/Desktop/Projects/Project-3/project3/WebScrape/WholeFoods/pizza.html')
soup = bs(url)

print(soup)