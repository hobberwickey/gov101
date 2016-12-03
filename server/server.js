var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json())

app.get("/", function(req, res){
	res.json({ blank: true })
})

app.get("/api/", function(req, res){
	res.json({ blank: true })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})