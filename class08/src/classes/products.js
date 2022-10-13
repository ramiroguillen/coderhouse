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

    getById(id, obj) {
        return obj;
    }

    getAll() {
        return this.content;
    }

    updateById(id, obj, objUpdated) {
        let i = this.content.indexOf(obj);
        this.content[i].name = objUpdated.name;
        this.content[i].price = objUpdated.price;
        this.content[i].thumbnail = objUpdated.thumbnail;
        try {
            fs.writeFileSync(this.pathfile, JSON.stringify(this.content));
        } catch (error) { throw new Error(`updateById: ${error}`) }
        return this.content[i];
    }

    deleteById(id) {
        let content = this.content.filter(obj => obj.id !== parseInt(id));
        this.content = content;
        try {
            fs.writeFileSync(this.pathfile, JSON.stringify(this.content));
        } catch (error) { throw new Error(`deleteById: ${error}`) }
        return { message: "item deleted" }
    }

    deleteAll() {
        let content = [];
        try {
            fs.writeFileSync(this.pathfile, JSON.stringify(content));
        } catch (error) { throw new Error(`deleteAll: ${error}`) }
        return this.content;
    }
}

const products = new Container("products");

module.exports = products;