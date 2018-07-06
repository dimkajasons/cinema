import Collection from '../models/collectionModule.js';

// let serverlessSessions = [
//     {
//         "title": "Forrest Gump",
//         "timeTable": [
//             "June 20, 2018 20:00:00",
//             "June 21, 2018 21:30:00",
//             "June 21, 2018 21:00:00",
//             "June 21, 2018 21:30:00",
//             "June 25, 2018 21:30:00",
//             "June 23, 2018 21:30:00",
//             "June 23, 2018 21:00:00",
//             "June 23, 2018 21:30:00",
//         ],
//         "duration": 150,
//         "hall": 2,
//         "img_src": "img/forrest.jpg"
//     },
//     {
//         "title": "Terminator",
//         "timeTable": [
//             "June 20, 2018 20:00:00",
//             "June 21, 2018 21:30:00",
//             "June 23, 2018 21:30:00",
//             "June 25, 2018 21:30:00"
//         ],
//         "duration": 180,
//         "hall": 1,
//         "img_src": "img/terminator.jpg"
//     }
// ];

export default class SessionCollection extends Collection {
    constructor(options) {
        super(options);
    }
    fetch() {
        return Promise.resolve(axios.get('/api/sessions')).then((result) => {
            //2
            this.children = result.data.map((element) => {
                return new this.Model(element)
            });
            return this.children;
        });
    }
}