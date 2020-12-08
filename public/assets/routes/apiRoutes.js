//file systems
const fs = require('fs') 

module.exports = (app) => {
    fs.readFile('db/db.json', 'utf-8', (error, noteData) => {

        if (error) throw error

        const data = JSON.parse(noteData)
        
        app.get('/api/notes', (req, res) => {
            res.json(data)
        })
    
        app.post('/api/notes', (req,res) => {
            data.push(req.body)
            fs.writeFile('db/db.json', JSON.stringify(data, '\t'), error => {
                if (error) throw error
            })
            console.log("wrote file")
        })

        app.get('/api/notes/:id', (req,res) => {
            res.json(data[req.params.id])
        })

        app.delete("/api/notes/:id", (req, res) => {
            data.splice(req.params.id, 1);
            fs.writeFile('db/db.json', JSON.stringify(data, '\t'), error => {
                if (error) throw error
            })
        });
    })
}