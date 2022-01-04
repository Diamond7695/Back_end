//create a function for the handler
//always add module exports
//export make it avable to other locatiohns
//connect to the array which is the json movie objects
const movies = require("./db.json")
//add 11 because mvoie id goes too ten
let globalId = 11


module.exports ={
    //created a property
    ///value is a function
    getMovies: (req,res)=>{
        ////send back the list of movies but first import
        res.status(200).send(movies)

    },
////creating POST
    createMovie: (req,res)=>{
        //line 16 in main.js
        //want to pull 
        //destructor
        const {title,rating, imageURL} = req.body
        //create a new movie object with what we are pulling
        let newMovie = {
            title,
            rating,
            imageURL,
            id: globalId

        }
///adding to new movies
        movies.push(newMovie)
        res.status(200).send(movies)      
          //add's another ID
        globalId++

    },
    updateMovie: (req,res)=>{
        ///change movie rating
        const {id} = req.params
        const {type} = req.body

        //find the index of the movie with the id of params
        //the plus changes to numbers
        let index = movies.findIndex(elem => +elem.id === +id)
        //check if it's plus or minus

//if index is 5 don't increase rating
//if it is already 5 then it's maxed out
        if(movies[index].rating === 5 && type =='plus'){
            res.status(400).send("can't go above rating")
            ///if the rating is at one don't go lower and type is minus

        }else if(movies[index].rating === 1 && type === 'minus'){
            res.status(400).send("Can't go below zero")
        }else if(type === 'plus'){
            movies[index].rating++
            res.status(200).send(movies)
        }else if(type === 'minus'){
            movies[index].rating--
            res.status(200).send(movies)
        }
    },
    deleteMovie: (req,res) =>{
        let{id} = req.params
        let index = movies.findIndex(elem => +elem.id === +id)
        movies.splice(index,1)
        res.status(200).send(movies)
    }
}