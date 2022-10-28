"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Products {
    constructor(items) {
        this.items = items;
    }
    getById(id) {
        return this.items.find(e => e.id === parseInt(id));
    }
    createNew(item) {
        item.id = this.items.length ? this.items.length + 1 : 1;
        this.items.push(item);
        return item.id;
    }
    updateById(id, update) {
        const item = this.items.find(e => e.id === parseInt(id));
        if (item) {
            const index = this.items.indexOf(item);
            let key;
            for (key in update) {
                if (item[key]) {
                    item[key] = update[key];
                }
            }
            this.items[index] = item;
            return this.items[index];
        }
    }
    deleteById(id) {
        const items = this.items.filter(e => e.id !== parseInt(id));
        this.items = items;
        return { message: "item deleted" };
    }
}
const products = new Products([]);
exports.default = products;
