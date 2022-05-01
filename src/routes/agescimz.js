const express = require('express');
const mzRouter = express.Router();
const axios = require('axios');

mzRouter.get('', async(req,res) => {
    res.render('home')
})
    /*
    try {
        const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/`)
        res.render('home', {articles: newsAPI.data})

    } catch (err) {
         if(err.response) {
             console.log(err.response.data)
             console.log(err.response.status)
             console.log(err.response.headers)
         } else if (err.requiest) {
             console.log(err.requiest)
         } else {
             console.error('Error', err.message)
         }
      } */


module.exports = mzRouter;