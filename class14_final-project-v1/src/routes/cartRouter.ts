import { Router, Request, Response } from "express";
import carts from "../classes/Carts";

import { findCartById } from "../middlewares/findById.mw";

const cartRouter = Router();

cartRouter.post("/", (req: Request, res: Response) => {
    res.json(carts.createNew(req.body));
});
cartRouter.delete("/:id", findCartById, (req: Request, res: Response) => {
    res.json(carts.deleteById(req.params.id));
});
cartRouter.get("/:id/products", findCartById, (req: Request, res: Response) => {
    res.json(carts.getCartProducts(req.params.id));
});
cartRouter.post("/:id/products", findCartById, (req: Request, res: Response) => {
    res.json(carts.addItem(req.params.id, req.body));
});
cartRouter.delete("/:id/products/:id_prod", findCartById, (req: Request, res: Response) => {
    res.json(carts.deleteProductFromCart(req.params.id, req.params.id_prod));
});

export default cartRouter;