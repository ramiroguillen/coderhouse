"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Carts {
    constructor(items) {
        this.items = items;
    }
    createNew(item) {
        item.id = this.items.length ? this.items.length + 1 : 1;
        item.timestamp = new Date();
        this.items.push(item);
        return item.id;
    }
    getById(id) {
        return this.items.find(e => e.id === parseInt(id));
    }
    getCartProducts(id) {
        const item = this.items.find(e => e.id === parseInt(id));
        if (item) {
            return item.products;
        }
    }
    addItem(id, obj) {
        const item = this.items.find(e => e.id === parseInt(id));
        if (item) {
            const index = this.items.indexOf(item);
            this.items[index].products.push(obj);
            return obj.id;
        }
    }
    deleteProductFromCart(id, id_prod) {
        const item = this.items.find(e => e.id === parseInt(id));
        if (item) {
            const index = this.items.indexOf(item);
            const items = this.items[index].products.filter(e => e.id !== parseInt(id_prod));
            this.items[index].products = items;
            return { message: "item deleted" };
        }
    }
    deleteById(id) {
        const items = this.items.filter(e => e.id !== parseInt(id));
        this.items = items;
        return { message: "item deleted" };
    }
}
const carts = new Carts([]);
exports.default = carts;
