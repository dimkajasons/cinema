const express = require('express');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;

const app = express();

let sessions = [];
let movies = [];
const mongoUrl = 'mongodb://localhost:27017/';
mongoClient.connect(mongoUrl, function(err, client){
    const db = client.db('films');
    const moviesCollection = db.collection('movies');
    const sessionsCollection = db.collection('sessions');

    if(err) {
        return console.log(err);
    }
    moviesCollection.find().toArray(function(err, result) {
        movies = result;
        client.close();
    })
    sessionsCollection.find().toArray(function(err, result) {
        sessions = result;
        client.close();           
    })
})

app.use(bodyParser.json());

app.get('/api/sessions', (req, res) => {
    res.send(sessions);
})
app.get('/api/movies', (req, res) => {
    let resMovies;
    resMovies = movies.slice(+req.query.lastChild, +req.query.lastChild + 5);
    res.send(resMovies);
});

app.use(express.static('client'));
app.listen(3000, () => {
    console.log('app on port 3000')
})