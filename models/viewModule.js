export default class View {
    constructor(options/*el, model, className, tagName*/) {
        let tag = options.tagName || 'div';
        if (options.el) {
            this.el = options.el;
        } else {
            this.el = document.createElement(tag);
        }
        this.model = options.model;

        if (options.className) {
            this.className = options.className;
            this.el.classList.add(this.className);
        }
    }
}