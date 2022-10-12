const fs = require("fs");
const path = require("path");

class Container {
    content;

    constructor(fileName) {
        this.pathfile = fileName
            ? path.join(process.cwd(), `/${fileName}.txt`)
            : path.join(process.cwd(), "test.txt");
        try {
            this.content = JSON.parse(fs.readFileSync(this.pathfile, "utf-8"));
        } catch (error) { throw new Error(`readFile: ${error}`) }
    }

    createNew(obj) {
        obj.id = this.content.length + 1;
        this.content.push(obj);
        try {
            fs.writeFileSync(this.pathfile, JSON.stringify(this.content));
        } catch (error) { throw new Error(`createNew: ${error}`) }
        return obj;
    }

    getById(id) {
        let obj = this.content.find(obj => obj.id === parseInt(id));
        if (obj) {
            return obj;
        } else { return { message: "item not found" } }
    }

    getAll() {
        return this.content;
    }

    updateById(id, obj) {
        let item = this.content.find(obj => obj.id === parseInt(id));
        if (item) {
            let i = this.content.indexOf(item);
            this.content[i].name = obj.name;
            this.content[i].price = obj.price;
            this.content[i].thumbnail = obj.thumbnail;
            try {
                fs.writeFileSync(this.pathfile, JSON.stringify(this.content));
            } catch (error) { throw new Error(`updateById: ${error}`) }
        } else { return { message: "item not found" } }
        return item;
    }

    deleteById(id) {
        this.content = this.content.filter(obj => obj.id !== parseInt(id));
        try {
            fs.writeFileSync(this.pathfile, JSON.stringify(this.content));
        } catch (error) { throw new Error(`deleteById: ${error}`) }
        return { message: "item deleted" }
    }

    deleteAll() {
        this.content = [];
        try {
            fs.writeFileSync(this.pathfile, JSON.stringify(this.content));
        } catch (error) { throw new Error(`deleteAll: ${error}`) }
        return this.content;
    }
}

const products = new Container("products");

module.exports = products;