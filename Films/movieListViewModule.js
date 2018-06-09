import View from '../models/viewModule'
export default class MovieListView extends View {
    constructor(options) {
        super(options);
        this.children = options.children || [];
    }
    addMovie(movie) {
        this.children.push(movie);
        this.el.appendChild(movie.render().el);
        //add new movie to the children and render it
    }
    render() {
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