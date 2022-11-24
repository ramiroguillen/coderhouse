import { Router } from "express";

import { findCartById } from "../middlewares/findById.middleware";

import { addCart, addCartContent, deleteCart, deleteCartContent, getCartContent } from "../controllers/carts.controller";

const routerCarts = Router();

routerCarts.post("/", addCart);
routerCarts.delete("/:id", findCartById, deleteCart);
routerCarts.get("/:id/products", findCartById, getCartContent);
routerCarts.post("/:id/products", findCartById, addCartContent);
routerCarts.delete("/:id/products/:id_prod", findCartById, deleteCartContent);

export default routerCarts;