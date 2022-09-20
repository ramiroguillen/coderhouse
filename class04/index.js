const fs = require('fs');

const products = fs.readFileSync('./products.txt', 'utf-8');

class Container {
    products;

    constructor(products) {
        this.products = products;
    }

    save(product) {
        let id = this.products.length + 1;
        product.id = id;
        this.products.push(product)
        try {
            fs.writeFileSync('./products.txt', JSON.stringify(this.products));
        } catch (error) { throw new Error(error) }
        return product.id;
    }

    getById(id) {
        return this.products.find(p => p.id === id);
    }

    getAll() {
        return this.products;
    }

    deleteById(id) {
        let products = this.products.filter(p => p.id !== id);
        try {
            fs.writeFileSync('./products.txt', JSON.stringify(products));
        } catch (error) { throw new Error(error) }
    }

    deleteAll() {
        let products = [];
        try {
            fs.writeFileSync('./products.txt', JSON.stringify(products));
        } catch (error) { throw new Error(error) }
    }
}

const c = new Container(JSON.parse(products));

c.getAll();
c.getById(1);
c.save({ name: 'Mousepad', price: 250, thumbnail: 'http://placekitten.com/200/300' });
c.deleteById(4);
// c.deleteAll;