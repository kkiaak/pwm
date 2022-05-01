const express = require('express')
const mzRouter = express.Router()

mzRouter.get('', async(req,res) => {
    res.render('home')
})

module.exports = mzRouter