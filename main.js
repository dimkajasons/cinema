class View {
    constructor(el, model) {
        this.el = el;
        this.model = model;
        // add className to the constructor and apply it to the this.el
        //add tagName to the constructor and build element if there is no one
        // optimize passing data to the constructor - use {}
    }

}
class MovieListView extends View {
    constructor (el, model, children) {
        super(el, model);
        this.children = children;
    }
    addMovie() {
        //add new movie to the children and render it
    }
    render (){
        if (this.children.length > 0) {
            this.children.forEach((movieView) =>{
                this.el.appendChild(movieView.render().el);
            });
        } else {
            this.el.innerText = "No movies";
        }
        
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
    //complex example
    let movieListView = new MovieListView(document.querySelector('#movie-list'), null, result.map(function (movie){
        return new MovieView(document.createElement('div'), movie)
    }))
    movieListView.render();
    //simple example
    //let movieListView = new MovieListView(document.querySelector('#movie-list'), null, [])
    //movieListView.render()
})
//movieListView.addMovie(new MovieView(...))