import { Router } from "express";

import routerProducts from "./products.router";
import routerCarts from "./carts.router";

const router = Router();

router.use("/products", routerProducts);
router.use("/carts", routerCarts);

export default router;