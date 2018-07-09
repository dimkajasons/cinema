import View from '../models/viewModule.js';
import { templates as templ } from '../templates/templates.js';
import {dateAction as dateActionForTemplate} from '../utils/dateTransformModule.js';
export default class SessionView extends View {
    constructor(options) {
        super(options);
        this.timeTable = options.model.timeTable;
    }
    render() {
        var renderWithParams = _.template(templ.sessionHTML);
        this.el.innerHTML = renderWithParams({
            title: this.model.title,
            timeTable: this.model.timeTable,
            img: this.model.img_src,
            dateAction: dateActionForTemplate
        })
        return this;
    }
}