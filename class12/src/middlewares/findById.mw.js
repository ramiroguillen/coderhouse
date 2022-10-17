const products = require("../classes/products.class");

async function findById(req, res, next) { // recieve an id from req.params.id
    let obj = await products.content.find(obj => obj.id === parseInt(req.params.id)); // look for the element with the id recieved
    if (obj) { // if the element exists, add it to req.body, if not return error
        req.body.obj = obj;
        next(); // go to next function in router
    } else { res.json({ error: "item not found" }) } 
}

module.exports = findById;