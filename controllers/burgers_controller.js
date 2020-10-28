const express = require('express')
const burger = require('./../models/burger')
const router = express.Router()

//Home Page 
router.get('/', async (req, res) => {
    const data = await burger.select()
    res.render('index', { burgers: data, title: 'Eat-da-Burger' })
})
router.get('/api/devour/:id', async (req, res) => {
    await burger.update(req.params.id)
    res.redirect("/")
})
router.get('/api/delete/:id', async (req, res) => {
    await burger.remove(req.params.id)
    res.redirect("/")
})
router.post('/newburger', async (req, res) => {
    console.log(req.body);
    await burger.insert(req.body.burger)
    res.redirect("/")
})

module.exports = router