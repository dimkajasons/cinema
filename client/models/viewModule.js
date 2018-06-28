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
        let turning = false;
        document.querySelector('#edit-button').addEventListener('click', function () {
            if (!turning) {
                document.querySelector('.edit-form').classList.add('visible');
                document.querySelectorAll('.delete-film-button').forEach(el => {
                    el.classList.add('visible')
                });
            } else {
                document.querySelector('.edit-form').classList.remove('visible');
                document.querySelectorAll('.delete-film-button').forEach(el => {
                    el.classList.remove('visible')
                });
            }
            turning = !turning;
        });
    }
}