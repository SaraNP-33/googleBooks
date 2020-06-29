# Google Book Search

This app allows users to search for any book and save their favorite ones, and eventually delete them if they so choose too.  
To accomplish this, this app uses axios to call on the Google Books api and deliver the content the user is searching for, MongoDb as the nonrelational database used to store the user's favorite books and React to create the beautifully functional front-end. To enable the communication between our front-end and our back-end database, we use Express as our server and Mongoose to create our database Schema. 

## Sample Images

When the user wants to search for a book, they simply have to type up what book (or author) they are searching for and hit Search. The button search will then send a request with axios and it's promise based response will deliver the results that are then rendered on the page as seen below. 

![searchBooks](./images/bookSearch.gif)

# Getting Started

To build this application we used a MERN (Mongo, Express, React, Node) structure. There were a number of packages that needed to be installed so we could effectively work both on the back-end and the front-end. 

## Back-End

To have a functional server we had to start by installing our Express package.

```
npm install express
```

We also had to install Mongoose so we could build our Schema and connect our front-end to it through our Express routes.

```
npm install mongoose
```

## Front-End

React was what we used to render our application. Since it's a Javascript based template we also had to install some packages to ensure we could communicate with our server, complete our API call and use React Router to enable us to switch between front-end pages.

The react-router-dom is the dependency that enable the switch between the "Search" and "View Saved Books"

```
npm install react-router-dom
```

Axios is was the promised based HTTP client for the browser and node that we used to complete the API request and to enable the communication with the Express routes in the back-end.

```
npm install Axios
```

## Additional Packages

There were some additional packages installed that helped with testing the app and also it's deployment to heroku where we chose to host our application.

The first one is concurrently. This package allows us to run the server and the react app at the same time without having to initiate two ports. With this package we only need to get to the root level of our application and do a "npm start" to have both the server and react initiated.

```
npm install concurrently
```
In order for concurrently to work, some changes to the package.json scripts need to be made so when "npm start" is run, the application will now what to do. Concurrently will use nodemon to start application in the development state. 

```
 "start:dev": "concurrently \"nodemon --ignore 'client/*'\" \"npm run client\""
 ```

If you don't have nodemon installed at a gobla level you will also want to install it as a dependency so it work with concurrently.

```
npm install nodemon
```

The other additional package installed was the if-env package. The if-env package helps when the package is deployed and in production mode. When the application runs, the if-env package will check to see if there are any env environments. It there are it will run the application in the production mode if not it will redirect it to the start:dev script shown above. 

```
npm install if-env
```
Just as we did with concurrently, in order for this package to work we need to modify the scripts in the package.json so it knows what to do.

```
 "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev"
 ```

# Code Highlights

To make this application functional, there is a lot of code and logic behind it to make it work. However, sometimes the beauty is in the details. Here we want to highlight how when the user clicks ![save](./images/savebtn.png) , the button text changes to ![saved](./images/saved.png).



