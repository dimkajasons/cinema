import { moviesCollection } from './main.js';
import MovieListView from './Films/movieListViewModule.js';
import MovieView from './Films/movieViewModule.js';
import MovieModel from './Films/movieModelModule.js';
var $win = $(window);
var lastChild = 0;
var currentChildQuantity = document.querySelector('#movie-list').childElementCount;
function dynamicLoader(elem) {
    lastChild = document.querySelector('#movie-list').childElementCount;

    currentChildQuantity = document.querySelector('#movie-list').childElementCount;
    
    if ($win.scrollTop() + $win.height() >= $(elem).offset().top) {
        document.querySelector('.load-marker').classList.remove('load-marker');
        document.querySelector('#movie-list').children[lastChild-2].classList.add('load-marker');

        moviesCollection.fetch(lastChild).then(function (result) {
            let movieListView = new MovieListView({
                el: document.querySelector('#movie-list'),
                className: 'list-container',
                collection: moviesCollection,
                children: result.map(function (movie) {
                    return new MovieView({
                        model: movie,
                        className: "movie-item",
                        collection: moviesCollection
                    })
                })
            });
            movieListView.render();
            movieListView.addLoadMarker();
        })

    }

};

export default dynamicLoader;