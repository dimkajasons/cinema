import Collection from '../models/collectionModule.js';

let serverlessMovies = [{
    "id": 1,
    "title": "Forrest Gump",
    "duration": "142",
    "director": "Zemekis",
    "year": 1994,
    "img_src": "img/forrest.jpg",
    "small_img": ["img/forrest.jpg", "img/terminator.jpg", "img/forrest.jpg"]
}, {
    "id": 2,
    "title": "Terminator",
    "duration": "150",
    "director": "Cameron",
    "year": 1992,
    "img_src": ["img/terminator.jpg"]
}, {
    "id": 3,
    "title": "Forrest Gump",
    "duration": "142",
    "director": "Zemekis",
    "year": 1994,
    "img_src": "img/forrest.jpg",
    "small_img": ["img/forrest.jpg", "img/terminator.jpg", "img/forrest.jpg"]
}, {
    "id": 4,
    "title": "Forrest Gump",
    "duration": "142",
    "director": "Zemekis",
    "year": 1994,
    "img_src": "img/forrest.jpg",
    "small_img": ["img/forrest.jpg", "img/terminator.jpg", "img/forrest.jpg"]
}, {
    "id": 5,
    "title": "Forrest Gump",
    "duration": "142",
    "director": "Zemekis",
    "year": 1994,
    "img_src": "img/forrest.jpg",
    "small_img": ["img/forrest.jpg", "img/terminator.jpg", "img/forrest.jpg"]
}, {
    "id": 6,
    "title": "Forrest Gump",
    "duration": "142",
    "director": "Zemekis",
    "year": 1994,
    "img_src": "img/forrest.jpg",
    "small_img": ["img/forrest.jpg", "img/terminator.jpg", "img/forrest.jpg"]
}, {
    "id": 7,
    "title": "Forrest Gump",
    "duration": "142",
    "director": "Zemekis",
    "year": 1994,
    "img_src": "img/forrest.jpg",
    "small_img": ["img/forrest.jpg", "img/terminator.jpg", "img/forrest.jpg"]
},
];
class MovieCollection extends Collection {
    constructor(options) {
        super(options);
    }
    fetch() {
        // return Promise.resolve(serverlessMovies).then((result) => {
        //     //2
        //     this.children = result.map((element) => {
        //         return new this.Model(element);
        //         lastId = element.id;
        //     });
        //     return this.children;
        // });
        return Promise.resolve(axios.get('/api/movies').then((result) => {
            this.children = result.data.map((element) => {
                return new this.Model(element);
                lastId = element.id;
            });
            return this.children;
        })
        )
    }
    create(movie) {
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
    delete(id) {
        let index = serverlessMovies.findIndex((item) => item.id === id)
        let p = new Promise(function (resolve, reject) {
            if (index !== -1) {
                serverlessMovies.splice(index, 1);
                resolve('OK')
            } else (
                reject(new Error('smth wrong'))
            )
        })
        return p;
    }
}
export default MovieCollection;