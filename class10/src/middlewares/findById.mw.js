const products = require("../classes/products.class");

async function findById(req, res, next) {
    let obj = await products.content.find(obj => obj.id === parseInt(req.params.id));
    if (obj) {
        req.body.obj = obj;
        next();
    } else { res.json({ error: "item not found" }) }
}

module.exports = findById;