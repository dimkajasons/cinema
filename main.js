class View {
    constructor(options/*el, model, className, tagName*/) {
        let tag = options.tagName || 'div';
        if (options.el) {
            this.el = options.el;
        } else {
            this.el = document.createElement(tag);
        }
        this.model = options.model;

        if (options.className) {
            this.className = options.className;
            this.el.classList.add(this.className);
        }   
    }
}

class MovieListView extends View {
    constructor (options) {
        super(options);
        this.children = options.children || [];
    }
    addMovie(movie) {
        this.children.push(movie);
        this.el.appendChild(movie.render().el);
        //add new movie to the children and render it
    }
    render (){
        if (this.children.length > 0) {
            let renderWithParams = _.template(templates.movieListHTML);
            this.children.forEach((movieView) => {
                this.el.appendChild(movieView.render().el);
            });

        } else {
            this.el.innerText = "No movies";
        }
        return this;
    }
}
class MovieView extends View {  
    render () {
        var renderWithParams = _.template(templates.movieHTML);
        this.el.innerHTML = renderWithParams({
            title: this.model.title,
            year: this.model.year,
            duration: this.model.duration,
            img: this.model.img_src
        });
        return this;
    }
}

class SessionsListView extends View {
    constructor(options) {
        super(options)
        this.children = options.children || [];
        this.timeTable = options.timeTable;
    }
    render() {
        if (this.children.length > 0) {
            this.children.forEach(element => {
                this.el.appendChild(element.render().el)
            });
        }
    }
}

class SessionView extends View {
    constructor(options){
        super (options);
        this.timeTable = options.model.timeTable;
    }
    render() {
        var renderWithParams = _.template(templates.sessionHTML);
        this.el.innerHTML = renderWithParams({
            title: this.model.title,
            timeTable: this.model.timeTable
        })
        return this;
    }
}


// 1. Создать экземляр коллекции MovieCollection

let moviesCollection = new MovieCollection({
    model: MovieModel, 
    url: 'filmsData.json'
});

// 2. Вызываем метод fetch 
moviesCollection.fetch().then(function (result){
    //3
    //complex example
    let movieListView = new MovieListView({
        el: document.querySelector('#movie-list'),
        className: 'list-container',
        children: result.map(function (movie){
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
        children: result.map(function(session) {
            return new SessionView({
                model: session,
                timeTable: result.map(function(session){
                    return session.timeTable;
                })
            })
        })
    })
    sessionListView.render();
})