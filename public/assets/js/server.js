//npm express package
const express = require('express')
//express server
const app = express()
//initial port
const PORT = process.env.PORT || 8080

//express data parsing
app.use(express.urlencoded({extended: true}))
app.use(express.json())


//router
require('../routes/apiRoutes')(app)
require('../routes/htmlRoutes')(app)

//server starter
app.listen(PORT, () => {
     console.log("Listening on PORT: " + PORT)
})