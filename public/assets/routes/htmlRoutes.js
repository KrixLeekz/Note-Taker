const path = require('path')

module.exports = (app) => {
    //home page
    app.get("/", (req,res) => {
        res.sendFile(path.join(__dirname, "../../index.html"))
    })
    //notes page
    app.get("/notes", (req,res) => {
        res.sendFile(path.join(__dirname, "../../notes.html"))
    })
    //if no matching route found it defaults to home page
    app.get("*", (req,res) => {
        res.sendFile(path.join(__dirname, "../../index.html"))
        console.log(__dirname)
    })
}