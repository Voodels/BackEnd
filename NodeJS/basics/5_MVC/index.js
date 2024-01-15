/*
          Model View Controller 
          Model: Data
          View: User Interface 
          Controller: Business Logic 

          MVC is a design pattern, not a framework.
          MVC is a way of structuring our code.

          MVC is a way of structuring our code so that we can easily maintain it and add new features to it.

*/
const ex = require('express');
const app = ex();


//taking file/data from file 
const fs = require('fs');
const data = require('./model/data.js');

//controller
const { getHomePage, getProductsPage, getProduct, deleteData } = require('./controller/controller.js');

//router> it is a middleware that we can use to create routes in express>why do we need router? > we need router to create routes in express> we can create routes in express without router but it is a good practice to use router to create routes in express> it is a good practice to use router to create routes in express because it helps us to organize our code better> it helps us to organize our code better because it allows us to create routes in separate files and then import them in our main file> it allows us to create routes in separate files and then import them in our main file because it is a middleware that we can use to create routes in express


//routes
const productRouter = require('./routes/routes.js');

//middleware
app.use('/api', productRouter.router)


app.listen(3000, () => {
  console.log('listening on port 3000');
});