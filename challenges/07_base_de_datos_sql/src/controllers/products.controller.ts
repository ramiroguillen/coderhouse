import { Request, Response } from "express";

import products from "../classes/Products";

export const getProduct = (req: Request, res: Response) => {
    res.json(products.getById(req.params.id));
};
export const addProduct = (req: Request, res: Response) => {
    res.json(products.createNew(req.body));
};
export const updateProduct = (req: Request, res: Response) => {
    res.json(products.updateById(req.params.id, req.body));
};
export const deleteProduct = (req: Request, res: Response) => {
    res.json(products.deleteById(req.params.id));
};