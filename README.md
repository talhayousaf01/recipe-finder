# Recipe Finder

## Project Description

Recipe Finder is a website which I developed for my CSC 225 Web Development course. The main purpose of this website is to help users find different recipes of their choice. Users can search for a meal or browse different categories of meals. The website provides information about the meal along with its picture, ingredients, measurements and instructions on how to cook that particular meal.

## How to Use the Website

- Open the website and enter the name of the meal you are looking for.
- Click on the Search button and the website will display recipes related to your search.
- Click on View Recipe to see the ingredients and cooking instructions.
- Users can also go to the Categories page where they can browse different types of meals such as chicken, beef, seafood and desserts.
- Click on Back to Categories to browse other categories.

## API Used

For my project I used TheMealDB REST API from where all the information about different meals is being fetched. I used the GET method to retrieve the data from the API in JSON format.

API website: https://www.themealdb.com/api.php

## API Endpoints

I used four different API endpoints in my project.

- `search.php?s=` — To search for meals by their name.
- `lookup.php?i=` — To get detailed information about a particular meal using its ID.
- `categories.php` — To display all the available meal categories.
- `filter.php?c=` — To display meals from a particular category.

## Authentication

For this project I used the free public test API key which is `1`. Users do not need to create an account or provide their own API key to use the website.

## Technologies and Tools Used

- HTML — To create the structure of the website.
- Bootstrap 5.3.3 — To design the website and make it responsive.
- Vanilla JavaScript — To fetch data from the API and display it on the website.
- Postman — To test the API endpoints.
- GitHub — To store and manage my project files.
- GitHub Pages — To host the website online.

## Project Links

GitHub Repository:
https://github.com/talhayousaf01/recipe-finder

Live Website:
https://talhayousaf01.github.io/recipe-finder/index.html
