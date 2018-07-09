import View from '../models/viewModule.js';
import loadImage from '../utils/image-utils.js';
import _ from 'lodash';
import {templates as templ} from '../templates/templates.js';
import {dateAction as dateActionForTemplate} from '../utils/dateTransformModule.js';
export default class MovieView extends View {
    constructor(options) {
        super(options);
        this.collection = options.collection;
    }
    render() {
        var renderWithParams = _.template(templ.movieHTML);
        this.el.innerHTML = renderWithParams({
            title: this.model.title,
            year: this.model.year,
            duration: this.model.duration,
            dateAction: dateActionForTemplate
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
        // Promise.all(this.model.small_img).then((srcs) => {
        //     srcs.map((src) => {
        //         if (src instanceof Error) {
        //             console.log(el);
        //         } else {
        //             loadImage(el).then((img) => {
        //                 this.el.querySelector('.small-images').appendChild(img);
        //                 img.classList.add('small-image');
        //             })
        //         }
        //     })
        // }).catch (function (err) {
        //     console.log(err);
        // })
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
            this.el.classList.add('background-color-class');
        } else {
            this.el.classList.add('background-color-class2')
        }
        return this;
    }
    destroy() {
        this.el.parentNode.removeChild(this.el)
    }
}