import { Router } from "express";

import productRouter from "./productRouter";
import cartRouter from "./cartRouter";

const router = Router();

router.use("/products", productRouter);
router.use("/carts", cartRouter);

export default router;