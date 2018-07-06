import View from '../models/viewModule.js';
import MovieCollection from './movieCollectionModule.js';
import MovieView from './movieViewModule.js';
import dynamicLoader from '../jqueryEvent.js';
import * as _  from '../node_modules/lodash/lodash.js';
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
        let throttled = _.throttle(dynamicLoader(document.querySelector('.load-marker')), 10000);
        document.addEventListener('scroll', function (e) {
            throttled();
        });
    }
    addMovie(movie) {
        this.children.push(movie);
        this.el.appendChild(movie.render().el);
        //add new movie to the children and render it
    }
    addLoadMarker() {
        this.el.children[this.el.children.length - 2].classList.add('load-marker');
    }
    render() {
        if (this.children.length > 0) {
            this.children.forEach((movieView) => {
                this.el.appendChild(movieView.render().el);
            });

        }
        //  else {
        //     this.el.innerText = "No movies";
        // }
        return this;
    }
}