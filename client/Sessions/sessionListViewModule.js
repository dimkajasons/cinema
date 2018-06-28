import View from '../models/viewModule.js'
export default class SessionsListView extends View {
    constructor(options) {
        super(options)
        this.children = options.children || [];
        this.timeTable = options.timeTable;
    }
    render() {
        if (this.children.length > 0) {
            this.children.forEach(element => {
                this.el.appendChild(element.render().el)
            });
        }
    }
}