const express = require('express')
const burger = require('./../models/burger')
const router = express.Router()

//Home Page 
router.get('/', async (req, res) => {
    const data = await burger.select()
    res.render('index', { burgers: data, title: 'Eat-da-Burger' })
})
//Devour API
router.get('/api/devour/:id', async (req, res) => {
    await burger.update(req.params.id)
    // res.redirect("/")
})
//Remove from Devoured API
router.get('/api/remove/:id', async (req, res) => {
    await burger.remove(req.params.id)
    //res.redirect("/")
})
//Add New Burger API
router.post('/newburger', async (req, res) => {
    console.log(req.body);
    await burger.insert(req.body.burger)
    res.redirect("/")
})
//Delete Burger from Menu API
router.get('/api/delete/:id', async (req, res) => {
    await burger.delete(req.params.id)
    // res.redirect("/")
})

module.exports = router