import View from '../models/viewModule.js';
import loadImage from '../utils/image-utils.js';
export default class MovieView extends View {
    constructor(options) {
        super(options);
        this.collection = options.collection;
    }
    render() {
        var renderWithParams = _.template(templates.movieHTML);
        this.el.innerHTML = renderWithParams({
            title: this.model.title,
            year: this.model.year,
            duration: this.model.duration
        });
        this.el.querySelector('.delete-film-button').addEventListener('click', () =>
            this.collection.delete(this.model.id)
                .then(this.destroy())
                .catch(function (err) {
                    console.log(err)
                })
        )
        loadImage(this.model.img_src).then((img) => {
            this.el.querySelector('.image-wrapper').appendChild(img);
        }).catch(function (err) {
            console.log(err)
        });
        Promise.all(this.model.small_img).then((srcs) => {
            srcs.map((src) => {
                loadImage(src).then((img) => {
                    this.el.querySelector('.small-images').appendChild(img);
                    img.classList.add('small-image');
                }).catch(function (err) {
                    console.log(err);
                })
            })
        }).catch(function (err) {
            console.log(err);
        })
        if (document.querySelector('#movie-list').children.length % 2 === 0) {
            this.el.classList.add('backgtound-color-class');
        }
        return this;
    }
    destroy() {
        this.el.parentNode.removeChild(this.el)
    }
}