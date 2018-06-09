import MovieCollection from '/Films/movieCollectionModule.js';
import MovieView from './Films/movieViewModule.js';
import MovieListView from './Films/movieListViewModule.js';
import SessionCollection from './Sessions/sessionCollectionModule.js';
import SessionView from './Sessions/sessionViewModule.js';
import SessionsListView from './Sessions/sessionListViewModule.js';
// 1. Создать экземляр коллекции MovieCollection

let moviesCollection = new MovieCollection({
    model: MovieModel,
    url: 'filmsData.json'
});

// 2. Вызываем метод fetch 
moviesCollection.fetch().then(function (result) {
    //3
    //complex example
    let movieListView = new MovieListView({
        el: document.querySelector('#movie-list'),
        className: 'list-container',
        children: result.map(function (movie) {
            return new MovieView({
                model: movie,
                className: "movie-item"
            })
        })
    });
    movieListView.render();
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