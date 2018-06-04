require('dotenv').config({path: 'env/.env'})
const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const errorHandler = require('././js/errorHandler')
//const hbs = require('handlebars')
const hbs = require('express-handlebars')
const https = require('https')

const routes = require('./js/routes/index')

app.set('port', process.env.PORT || 3000)

app.engine('html', hbs({
  extname: 'html',
  defaultLayout: 'base',
  layoutsDir: path.join(__dirname, './views/layouts'),
  partialDir: path.join(__dirname, './views/partials')
}))
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'html')

app.use('/', routes)

app.use(express.static(path.join(__dirname, 'public')))

/*const httpsOptions = {
  key: fs.readFileSync('../rootCA.key'),
  cert: fs.readFileSync('../rootCA.pem')
}*/

app
  .listen(app.get('port'), (err) => {
    console.log('Server Started: Listening on port ' + process.env.PORT)
    console.log('Environment is currently: ' + (process.env.NODE_ENV))
    if (err) {
      errorHandler(err, 'applog', 'app.js', Date())
    }
  })