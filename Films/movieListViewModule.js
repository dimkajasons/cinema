import View from '../models/viewModule.js';
import MovieCollection from './movieCollectionModule.js';
import MovieView from './movieViewModule.js';
export default class MovieListView extends View {
    constructor(options) {
        super(options);
        this.collection = options.collection;
        this.children = options.children || [];
        document.querySelector('#add-movie-button').addEventListener('click', function (e) {
            this.collection.create({
                "id": 3,
                "title": "Avangers",
                "duration": "142",
                "director": "Zemekis",
                "year": 2018
            }).then((movie) => this.addMovie(new MovieView({
                model: movie,
                className: "movie-item",
                collection: this.collections
            }))).catch((e) => console.log(e))
        }.bind(this));
    }
    addMovie(movie) {
        this.children.push(movie);
        this.el.appendChild(movie.render().el);
        //add new movie to the children and render it
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