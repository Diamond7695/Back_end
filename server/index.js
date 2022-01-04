//always Have this code

const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())


//connect controller with this file
//dot slash is the folder
const ctrl = require('./controller.js')


///end point that will display movies to front end
//different methods is get and post
app.get('/api/movies', ctrl.getMovies)
//create a function
app.post('./api/movies',ctrl.createMovie)
app.put('/api/movies/:id', ctrl.updateMovie)
app.delete('/api/movies/:id',ctrl.deleteMovie)

app.listen(4004,()=> console.log('take us to 4004'))