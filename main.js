class View {
    constructor(el, model) {
        this.el = el;
        this.model = model;
    }

}
class MovieListView extends View {
    constructor (el, model, children) {
        super(el, model);
        this.children = children;
    }
    addMovie() {

    }
    render (){
        this.children.forEach((movieView) =>{
            this.el.appendChild(movieView.render().el);
        });
    }
}
class MovieView extends View {  
    constructor (el, model) {
        super(el, model);
    }
    render () {
        var movie = document.createElement('div');
        movie.textContent = `Title: ${this.model.title} 
                             Year: ${this.model.year}`;
        this.el.appendChild(movie);
        return this;
    }
}

fetch('data.json').then((data)=> data.json())
.then(function (result){
    console.log(result);
    let movieListView = new MovieListView(document.querySelector('#movie-list'), null, result.map(function (movie){
        return new MovieView(document.createElement('div'), movie)
    }))
    movieListView.render();
})
