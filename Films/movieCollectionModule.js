import Collection from '../models/collectionModule.js';

let serverlessMovies = [{
    "id": 1,
    "title": "Forrest Gump",
    "duration": "142",
    "director": "Zemekis",
    "year": 1994,
    "img_src": "img/forrest.jpg"
}, {
    "id": 2,
    "title": "Terminator",
    "duration": "150",
    "director": "Cameron",
    "year": 1992,
    "img_src": "img/terminator.jpg"
}];

export default class MovieCollection extends Collection {
    constructor(options) {
        super(options)
    }
    fetch() {
        return Promise.resolve(serverlessMovies).then((result) => {
            //2
            this.children = result.map((element) => {
                return new this.Model(element)
            });
            return this.children;
        });
    }
    static create(movie) {
        let p = new Promise(function (resolve, reject) {
            if (!movie) {
                reject(new Error());
            } else {
                serverlessMovies.push(movie);
                resolve(movie);
            }
        });
        return p;
    }
    static delete (movie) {
        let p = new Promise(function(resolve, reject) {
            serverlessMovies.splice(serverlessMovies.indexOf(movie), 1);
            resolve(movie)
        })
        return p;
    }
}