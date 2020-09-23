var express = require('express')
const { dirname } = require('path')
var path = require('path')
var app = express()

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(3000)