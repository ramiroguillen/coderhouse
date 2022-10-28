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
    // public updateById(id: string, update: IProduct) {
    //     const element = this.items.find(e => e.id === parseInt(id));
    //     const index = this.items.indexOf(element);
    //     for (const key in update) {
    //         if (this.items[index][key]) {
    //             this.items[index][key] = update[key];
    //         }
    //     }
    //     return this.items[index];
    // }
    deleteById(id) {
        const items = this.items.filter(e => e.id !== parseInt(id));
        this.items = items;
        return { message: "item deleted" };
    }
}
