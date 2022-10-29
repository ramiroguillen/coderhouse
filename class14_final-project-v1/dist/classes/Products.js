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
        item.timestamp = new Date();
        this.items.push(item);
        return item.id;
    }
    updateById(id, update) {
        const item = this.items.find(e => e.id === parseInt(id));
        if (item) {
            const index = this.items.indexOf(item);
            item.name = update.name ? update.name : item.name;
            item.description = update.description ? update.description : item.description;
            item.code = update.code ? update.code : item.code;
            item.thumbnail = update.thumbnail ? update.thumbnail : item.thumbnail;
            item.price = update.price ? update.price : item.price;
            item.stock = update.stock ? update.stock : item.stock;
            item.timestamp = new Date();
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
