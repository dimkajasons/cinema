import View from '../models/viewModule.js';
import MovieCollection from './movieCollectionModule.js';
import MovieView from './movieViewModule.js';
export default class MovieListView extends View {
    constructor(options) {
        super(options);
        this.children = options.children || [];
        document.querySelector('#add-movie-button').addEventListener('click', function (e) {
            MovieCollection.create({
                "id": 3,
                "title": "Avangers",
                "duration": "142",
                "director": "Zemekis",
                "year": 2018,
                "img_src": "img/forrest.jpg"
            }).then((movie) => this.addMovie(new MovieView({
                model: movie,
                className: "movie-item",
                parent: this
            }))).catch((e) => console.log(e))
        }.bind(this));
        document.querySelectorAll('.delete-film-button').forEach((el) =>
            el.addEventListener('click', function () {
                MovieCollection.delete({
                    "id": 1,
                    "title": "Forrest Gump",
                    "duration": "142",
                    "director": "Zemekis",
                    "year": 1994,
                    "img_src": "img/forrest.jpg"
                }).then((movie) => this.deleteMovie(movie))
            }.bind(this)))
    }
    addMovie(movie) {
        this.children.push(movie);
        this.el.appendChild(movie.render().el);
        //add new movie to the children and render it
    }
    deleteMovie(movie) {
        this.children.splice(this.children.indexOf(movie), 1);
        console.log(this.children)
    }
    render() {
        if (this.children.length > 0) {
            this.children.forEach((movieView) => {
                this.el.appendChild(movieView.render().el);
            });

        } else {
            this.el.innerText = "No movies";
        }
        return this;
    }
}