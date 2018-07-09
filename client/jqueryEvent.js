import { moviesCollection } from './main.js';
import MovieListView from './Films/movieListViewModule.js';
import MovieView from './Films/movieViewModule.js';
import MovieModel from './Films/movieModelModule.js';
import $ from 'jquery'
var $win = $(window);
var lastChild = 0;
var exit;
var currentChildQuantity = document.querySelector('#movie-list').childElementCount;

// checkLoader().then(function (date) {
//     if (date) {
//         movieListView.addLoadMarker();
//     } else {
//         return
//     }
// })
// function checkLoader() {
//     return new Promice(function (res, rej) {
//         if (document.querySelector('#movie-list').childElementCount == currentChildQuantity) {
//             res(false)
//         } else (
//             res(true)
//         )
//     })
// }

function dynamicLoader(elem) {
    
    lastChild = document.querySelector('#movie-list').childElementCount;
    // alert(5)
    // currentChildQuantity = document.querySelector('#movie-list').childElementCount;
    if (!exit) {
        if ($win.scrollTop() + $win.height() >= $(elem).offset().top) {
            document.querySelector('.load-marker').classList.remove('load-marker');
            document.querySelector('#movie-list').children[lastChild - 2].classList.add('load-marker');


            moviesCollection.fetch(lastChild).then(function (result) {
                if (result.length === 0){
                    exit = true;
                }
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
    } else {
        return
    }
};

export default dynamicLoader;