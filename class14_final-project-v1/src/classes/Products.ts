import IProduct from "../interfaces/IProduct";
import IProductUpdate from "../interfaces/IProductUpdate";

class Products {
    items: Array<IProduct>

    constructor(items: Array<IProduct>) {
        this.items = items;
    }

    public getById(id: string) {
        return this.items.find(e => e.id === parseInt(id));
    }

    public createNew(item: IProduct) {
        item.id = this.items.length ? this.items.length + 1 : 1;
        this.items.push(item);
        return item.id;
    }

    public updateById(id: string, update: IProductUpdate) {
        const item = this.items.find(e => e.id === parseInt(id));
        if (item) {
            const index = this.items.indexOf(item);
            let key: keyof typeof update;
            for (key in update) {
                if (item[key]) {
                    item[key] = update[key];
                }
            }
            this.items[index] = item;
            return this.items[index];
        }
    }

    public deleteById(id: string) {
        const items = this.items.filter(e => e.id !== parseInt(id));
        this.items = items;
        return { message: "item deleted" }
    }
}

const products = new Products([]);

export default products;
