const express = require("express"); // express app init
// necessary imports
const products = require("../classes/products.class"); // elements class and methods
const findById = require("../middlewares/findById.mw"); // middlewares
const productsRouter = express.Router(); // init elements router

// get all elements
productsRouter.get("/", async (req, res) => {
    res.json(await products.getAll());
});
// get element by id
productsRouter.get("/:id", findById, async (req, res) => { // gets the element in req.body.obj from the middleware
    res.json(await products.getById(req.params.id, req.body.obj));
});
// create new element
productsRouter.post("/", async (req, res) => { // send new element in req.body
    res.json(await products.createNew(req.body));
});
// update element by id
productsRouter.put("/:id", findById, async (req, res) => { // gets the element to update in req.body.obj from the middleware
    res.json(await products.updateById(req.params.id, req.body.obj, req.body)); // and the updated element in req.body
});
// delete element by id
productsRouter.delete("/:id", findById, async (req, res) => { // gets the element to delete in req.body.obj from the middleware
    res.json(products.deleteById(req.params.id));
});

module.exports = productsRouter;