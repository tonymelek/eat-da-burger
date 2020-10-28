//Call/Import  Deoendencies
const express = require('express')
const path = require('path')
const expbs = require('express-handlebars')

const app = express(); //Start Express
const PORT = process.env.PORT || 5000; //Set Port

//Handle the Post request and response
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Identify the use of Handlebars
app.engine('handlebars', expbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')
//Database

//Set routes
//Static Route
app.use(express.static(path.join(__dirname, 'public')))


//Idetify/Link router
app.use(require('./controllers/burgers_controller'))
//Initialise server
app.listen(PORT, () => console.log(`The Express Server is now Up and running on PORT : ${PORT}`))