import Model from '../models/modelModule.js'
export default class MovieModel extends Model {
    setTitle(title) {
        this.title = title;
    }
    validate() {
        return true;
    }
}