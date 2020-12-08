const path = require('path')
const fs = require('fs')

module.exports = (app) => {
    fs.readFile('db/db.json', 'utf-8', () => {
        //notes page
        app.get("/notes", (req,res) => {
            res.sendFile(path.join(__dirname, "../../notes.html"))
        })
        //if no matching route found it defaults to home page
        app.get("*", (req,res) => {
            res.sendFile(path.join(__dirname, "../../index.html"))
        })
    })
}