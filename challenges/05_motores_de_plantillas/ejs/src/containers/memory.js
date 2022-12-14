class Container {

    constructor() {
        this.elements = [];
    }

    getAll() {
        return this.elements;
    }

    getById(id) {
        return this.elements.find(e => e.id === parseInt(id));
    }

    createNew(element) {
        element.id = this.elements.length ? this.elements.length + 1 : 1;
        this.elements.push(element);
        return element.id;
    }

    updateById(id, update) {
        let element = this.elements.find(e => e.id === parseInt(id));
        let index = this.elements.indexOf(element);
        for (const key in update) {
            if (this.elements[index][key]) {
                this.elements[index][key] = update[key];
            }
        }
        return this.elements[index];
    }

    deleteById(id) {
        let elements = this.elements.filter(e => e.id !== parseInt(id));
        this.elements = elements;
        return { message: "item deleted" }
    }

    deleteAll() {
        let elements = [];
        this.elements = elements;
        return this.elements;
    }
}

export default Container;