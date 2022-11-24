import { Router } from "express";

import auth from "../middlewares/auth.middleware";
import { findProductById } from "../middlewares/findById.middleware";

import { getProduct, addProduct, updateProduct, deleteProduct } from "../controllers/products.controller";

const routerProducts = Router();

routerProducts.get("/:id", findProductById, getProduct);
routerProducts.post("/", auth, addProduct);
routerProducts.put("/:id", auth, findProductById, updateProduct);
routerProducts.delete("/:id", auth, findProductById, deleteProduct);

export default routerProducts;