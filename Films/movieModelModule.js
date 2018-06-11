import Model from '../models/modelModule.js'
export default class MovieModel extends Model {
    constructor(options) {
        super (options);
    }
    setTitle(title) {
        this.title = title;
    }
    validate() {
        return true;
    }
}