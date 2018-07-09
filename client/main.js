import MovieCollection from './Films/movieCollectionModule.js';
import MovieModel from './Films/movieModelModule.js';
import MovieView from './Films/movieViewModule.js';
import MovieListView from './Films/movieListViewModule.js';
import SessionCollection from './Sessions/sessionCollectionModule.js';
import SessionModel from './Sessions/sessionModelModule.js';
import SessionView from './Sessions/sessionViewModule.js';
import SessionsListView from './Sessions/sessionListViewModule.js';
// import './styles/main.css';
// 1. Создать экземляр коллекции MovieCollection

let moviesCollection = new MovieCollection({
    model: MovieModel,
    url: 'filmsData.json'
});

// 2. Вызываем метод fetch 
moviesCollection.fetch(0).then(function (result) {
    //3
    //complex example
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

let sessionCollection = new SessionCollection({
    model: SessionModel,
    url: 'sessionData.json'
});

sessionCollection.fetch().then((result) => {
    let sessionListView = new SessionsListView({
        el: document.querySelector("#session-list"),
        children: result.map(function (session) {
            return new SessionView({
                model: session,
                timeTable: result.map(function (session) {
                    return session.timeTable;
                })
            })
        })
    })
    sessionListView.render();
})

let nav = document.querySelector('.navigation');
nav.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('nav-films')) {
        var stateObj = { foo: e.target.href };
        history.pushState(stateObj, e.target.href, e.target.href);
        document.querySelector('#movie-list').style.display = 'block';
        document.querySelector('#session-list').style.display = 'none';
    } else if (e.target.classList.contains('nav-sessions')) {
        var stateObj = { foo: e.target.href };
        history.pushState(stateObj, e.target.href, e.target.href);
        document.querySelector('#movie-list').style.display = 'none';
        document.querySelector('#session-list').style.display = 'block';
    }
})
window.addEventListener('popstate', function (e) {
    console.log(e.state.foo);
})

export {moviesCollection};