import View from '../models/viewModule.js'
export default class MovieView extends View {
    render() {
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