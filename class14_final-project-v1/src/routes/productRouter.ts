import { Router, Request, Response } from "express";

import auth from "../middlewares/auth.mw";
import { findProductById } from "../middlewares/findById.mw";

import products from "../classes/Products";

const productRouter = Router();

productRouter.get("/:id", findProductById, (req: Request, res: Response) => {
    res.json(products.getById(req.params.id));
});
productRouter.post("/", auth, (req: Request, res: Response) => {
    res.json(products.createNew(req.body));
});
productRouter.put("/:id", auth, findProductById, (req: Request, res: Response) => {
    res.json(products.updateById(req.params.id, req.body));
});
productRouter.delete("/:id", auth, findProductById, (req: Request, res: Response) => {
    res.json(products.deleteById(req.params.id));
});

export default productRouter;