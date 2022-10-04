const fs = require("fs");
const path = require("path");

class Products {
    products;

    constructor(fileName) {
        this.pathfile = fileName
            ? path.join(process.cwd(), `/${fileName}.txt`)
            : path.join(process.cwd(), "test.txt")
        try {
            this.products = JSON.parse(fs.readFileSync("./products.txt", "utf-8"))
        } catch (error) {
            fs.writeFileSync(this.pathfile, JSON.stringify([]));
            this.products = JSON.parse(fs.readFileSync(this.pathfile, "utf-8"))
        }
    }

    save(product) {
        let id = this.products.length + 1;
        product.id = id;
        this.products.push(product)
        try {
            fs.writeFileSync(this.pathfile, JSON.stringify(this.products));
        } catch (error) { throw new Error(error) }
        return product.id;
    }

    getById(id) {
        this.products = JSON.parse(fs.readFileSync(this.pathfile, "utf-8"))
        return this.products.find(p => p.id === id);
    }

    getAll() {
        return this.products;
    }

    deleteById(id) {
        let products = this.products.filter(p => p.id !== id);
        try {
            fs.writeFileSync(this.pathfile, JSON.stringify(products));
        } catch (error) { throw new Error(error) }
    }

    deleteAll() {
        let products = [];
        try {
            fs.writeFileSync(this.pathfile, JSON.stringify(products));
        } catch (error) { throw new Error(error) }
    }
}

const p = new Products("products");

module.exports = p;