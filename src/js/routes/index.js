const express = require('express')
const router = express.Router()
const https = require('https')
const request = require('request')

const baseURL = 'https://api.bigcommerce.com/stores/d2bmn/'

router.get('/', (req, res, next) => {
  res.render('index', {title: 'Suh Dude!'});
})

router.get('/products', (req, response) => {
    options = {
      url: 'https://api.bigcommerce.com/stores/d2bmn/v2/products',
      headers: {
        'accept':'application/json',
        'content-type':'application/json',
        'x-auth-client': process.env.CLIENT,
        'x-auth-token': process.env.TOKEN
      }
    }
    request(options, (req, res) => {
      console.log(res.body)
      response.json(JSON.parse(res.body))
    })
})

module.exports = router;