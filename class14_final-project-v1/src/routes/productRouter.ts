import { Router, Request, Response } from "express";

import auth from "../middlewares/auth.mw";
import findById from "../middlewares/findById.mw";

const productRouter = Router();

productRouter.get("/:id", findById, (req: Request, res: Response) => {

});
productRouter.post("/", auth, (req: Request, res: Response) => {

});
productRouter.put("/:id", auth, findById, (req: Request, res: Response) => {

});
productRouter.delete("/:id", auth, findById, (req: Request, res: Response) => {

});

export default productRouter;