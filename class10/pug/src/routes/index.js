import { Router } from "express";
import productsRouter from "./productsRouter.js";
import viewsRouter from "./viewsRouter.js"; // views router 

const router = Router();

router.use("/", viewsRouter);
router.use("/api/products", productsRouter);

export default router;