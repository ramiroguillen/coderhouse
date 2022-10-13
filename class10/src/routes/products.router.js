const express = require("express");

const products = require("../classes/products.class");
const findById = require("../middlewares/findById.mw");
const productsRouter = express.Router();

productsRouter.get("/", async (req, res) => {
    res.json(await products.getAll());
});

productsRouter.get("/:id", findById, async (req, res) => {
    res.json(await products.getById(req.params.id, req.body.obj));
});

productsRouter.post("/", async (req, res) => {
    res.json(await products.createNew(req.body));
});

productsRouter.put("/:id", findById, async (req, res) => {
    res.json(await products.updateById(req.params.id, req.body.obj, req.body));
});

productsRouter.delete("/:id", findById, async (req, res) => {
    res.json(products.deleteById(req.params.id));
});

module.exports = productsRouter;