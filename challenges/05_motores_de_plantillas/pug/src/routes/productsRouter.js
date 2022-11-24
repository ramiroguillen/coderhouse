import { Router } from "express";

import products from "../apis/productsApi.js";
import findById from "../middlewares/findById.mw.js";

const productsRouter = Router();

productsRouter.get("/", (req, res) => {
    res.json(products.getAll());
});
productsRouter.get("/:id", findById, async (req, res) => {
    res.json(await products.getById(req.params.id));
});
productsRouter.post("/", async (req, res) => {
    res.json(await products.createNew(req.body));
});
productsRouter.put("/:id", findById, async (req, res) => {
    res.json(await products.updateById(req.params.id, req.body));
});
productsRouter.delete("/:id", findById, async (req, res) => {
    res.json(products.deleteById(req.params.id));
});

export default productsRouter;