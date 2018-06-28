import View from '../models/viewModule.js'
export default class SessionView extends View {
    constructor(options) {
        super(options);
        this.timeTable = options.model.timeTable;
    }
    render() {
        var renderWithParams = _.template(templates.sessionHTML);
        this.el.innerHTML = renderWithParams({
            title: this.model.title,
            timeTable: this.model.timeTable,
            img: this.model.img_src
        })
        return this;
    }
}