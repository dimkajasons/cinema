import { moviesCollection} from './main.js';
import MovieListView from './Films/movieListViewModule.js';
import MovieView from './Films/movieViewModule.js';
import MovieModel from './Films/movieModelModule.js';
var $win = $(window);
function dynamicLoader(elem) {
    if ($win.scrollTop() + $win.height() >= $(elem).offset().top) {
        document.querySelector('.load-marker').classList.remove('load-marker');
        moviesCollection.fetch().then(function (result) {
            // result.map(function (el) {
                
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

            // })
            movieListView.render();
            movieListView.addLoadMarker();
        })
    }
};

export default dynamicLoader;