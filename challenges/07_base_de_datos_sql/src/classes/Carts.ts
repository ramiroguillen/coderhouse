import ICart from "../interfaces/ICarts";
import IProduct from "../interfaces/IProducts";

class Carts {
    items: Array<ICart>

    constructor(items: Array<ICart>) {
        this.items = items;
    }

    public createNew(item: ICart) {
        item.id = this.items.length ? this.items.length + 1 : 1;
        item.timestamp = new Date();
        this.items.push(item);
        return item.id;
    }

    public getById(id: string) {
        return this.items.find(e => e.id === parseInt(id));
    }

    public getCartProducts(id: string) {
        const item = this.items.find(e => e.id === parseInt(id));
        if (item) {
            return item.products;
        }
    }

    public addItem(id: string, obj: IProduct) {
        const item = this.items.find(e => e.id === parseInt(id));
        if (item) {
            const index = this.items.indexOf(item);
            this.items[index].products.push(obj);
            return obj.id;
        }
    }

    public deleteProductFromCart(id: string, id_prod: string) {
        const item = this.items.find(e => e.id === parseInt(id));
        if (item) {
            const index = this.items.indexOf(item);
            const items = this.items[index].products.filter(e => e.id !== parseInt(id_prod));
            this.items[index].products = items;
            return { message: "item deleted" }
        }
    }

    public deleteById(id: string) {
        const items = this.items.filter(e => e.id !== parseInt(id));
        this.items = items;
        return { message: "item deleted" }
    }
}

const carts = new Carts([]);

export default carts;
