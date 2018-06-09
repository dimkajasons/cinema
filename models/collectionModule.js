//movies collection
export default class Collection {
    constructor ( options/*model,  url, children*/) {
        this.Model = options.model; // model class 
        this.children = options.children; // models stored in collection
        this.url = options.url; // url to get data
    }
    fetch () { // Get data from server // 1
       return fetch(this.url).then((data)=> data.json()).then((result) => {
            //2
            this.children = result.map((elements) => {
                return new this.Model(elements)
            });
            return this.children;
       });
    }

    add (item) {
        this.children.push(item)
    }
    get () {
        return this.children;
    }
}




