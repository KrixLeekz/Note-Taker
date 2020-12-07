//npm express package
const express = require('express')
//express server
const app = express()
//initial port
var PORT = process.env.PORT || 8000

//express data parsing
app.use(express.urlencoded({extended: true}))
app.use(express.json())


//router
require('')