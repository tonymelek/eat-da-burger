//Call/Import  Deoendencies
const express = require('express')
const path = require('path')
const expbs = require('express-handlebars')

const app = express(); //Start Express
const PORT = process.env.PORT || 5000; //Set Port

//Identify the use of Handlebars
app.engine('handlebars', expbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')
//Database

//Set routes
//Home Page
app.get('/', (req, res) => {
    res.render('index', {
        'title': 'Home'
    })
})
//About Me Page
app.get('/about', (req, res) => {
    res.render('about', {
        'title': 'About Me'
    })
})
app.get('/icecream/:name', (req, res) => {
    console.log(icecreams.filter(item => item.name === req.params.name));
    res.render('icecream', (icecreams.filter(item => item.name === req.params.name))[0])
})

//Initialise server
app.listen(PORT, () => console.log(`The Express Server is now Up and running on PORT : ${PORT}`))