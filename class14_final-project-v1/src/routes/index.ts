import { Router } from "express";

import productRouter from "./productRouter";
import cartRouter from "./cartRouter";

const router = Router();

router.use("/api/products", productRouter);
router.use("/api/carts", cartRouter);

export default router;