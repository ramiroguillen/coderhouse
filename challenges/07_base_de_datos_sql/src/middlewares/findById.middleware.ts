import { Request, Response, NextFunction } from "express";

import products from "../classes/Products";
import carts from "../classes/Carts";

export function findProductById(req: Request, res: Response, next: NextFunction) {
    let item = products.items.find(e => e.id === parseInt(req.params.id));
    if (item) {
        next();
    } else { res.json({ error: "item not found" }) }
}

export function findCartById(req: Request, res: Response, next: NextFunction) {
    let item = carts.items.find(e => e.id === parseInt(req.params.id));
    if (item) {
        next();
    } else { res.json({ error: "item not found" }) }
}