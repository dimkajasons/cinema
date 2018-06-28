const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

let movies = [{
    "id": 1,
    "title": "Forrest Gump",
    "duration": "142",
    "director": "Zemekis",
    "year": 1994,
    "small_img_urls": ["img/forrest.jpg", "img/forresdsfst.jpg", "img/forrest.jpg"],
    "img_src": "img/forrest.jpg"
}, {
    "id": 2,
    "title": "Terminator",
    "duration": "150",
    "director": "Cameron",
    "year": 1992,
    "img_src": "terminator.jpg"
}];

app.get('/api/movies', (req, res) => {
    res.send(movies)
});

app.use(express.static('client'));
app.listen(3000, () => {
    console.log('app on port 3000')
})