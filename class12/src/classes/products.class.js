const fs = require("fs");
const path = require("path");

class Container {
    content;

    constructor(fileName) { // recieve the file name
        this.pathfile = fileName // declare the directory of the file
            ? path.join(process.cwd(), `/${fileName}.txt`)
            : path.join(process.cwd(), "test.txt");
        try { // read file data
            this.content = JSON.parse(fs.readFileSync(this.pathfile, "utf-8")); 
        } catch (error) { throw new Error(`readFile: ${error}`) }
    }

    createNew(obj) { // recieve an object
        obj.id = this.content.length + 1; // add an id to the object
        this.content.push(obj); // add the object to the storage
        try { // save data in the file
            fs.writeFileSync(this.pathfile, JSON.stringify(this.content));
        } catch (error) { throw new Error(`createNew: ${error}`) }
        return obj; // return object created
    }

    getById(id, obj) { // recieve an object from middleware
        return obj; // return the object recieved
    }

    getAll() { // return all elements from storage
        return this.content;
    }

    updateById(id, obj, objUpdated) { // recieve obj to update from middleware and the updated obj from req.body 
        let i = this.content.indexOf(obj); // find the obj to update in storage
        this.content[i].name = objUpdated.name; // update with new values
        this.content[i].price = objUpdated.price;
        this.content[i].thumbnail = objUpdated.thumbnail;
        try { // save changes into the file
            fs.writeFileSync(this.pathfile, JSON.stringify(this.content));
        } catch (error) { throw new Error(`updateById: ${error}`) }
        return this.content[i]; // return updated obj
    }

    deleteById(id) { // recieve the id of the obj to delete
        let content = this.content.filter(obj => obj.id !== parseInt(id)); // return the data without the object
        this.content = content; // save changes into the storage
        try { // save changes into the file
            fs.writeFileSync(this.pathfile, JSON.stringify(this.content));
        } catch (error) { throw new Error(`deleteById: ${error}`) }
        return { message: "item deleted" }
    }

    deleteAll() { // delete all elements
        let content = []; // empty array will replace the storage, removing all elements
        try { // save changes into the file
            fs.writeFileSync(this.pathfile, JSON.stringify(content));
        } catch (error) { throw new Error(`deleteAll: ${error}`) }
        return this.content; // return empty storage
    }
}

const products = new Container("products"); // new instance of the class

module.exports = products;