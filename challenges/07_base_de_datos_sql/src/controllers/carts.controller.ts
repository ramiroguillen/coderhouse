import { Request, Response } from "express";

import carts from "../classes/Carts";

export const addCart = (req: Request, res: Response) => {
    res.json(carts.createNew(req.body));
}
export const deleteCart = (req: Request, res: Response) => {
    res.json(carts.deleteById(req.params.id));
}
export const getCartContent = (req: Request, res: Response) => {
    res.json(carts.getCartProducts(req.params.id));
}
export const addCartContent = (req: Request, res: Response) => {
    res.json(carts.addItem(req.params.id, req.body));
}
export const deleteCartContent = (req: Request, res: Response) => {
    res.json(carts.deleteProductFromCart(req.params.id, req.params.id_prod));
}