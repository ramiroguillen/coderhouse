import { Router, Request, Response } from "express";

import findById from "../middlewares/findById.mw";

const cartRouter = Router();

cartRouter.post("/", (req: Request, res: Response) => {

});
cartRouter.delete("/:id", findById, (req: Request, res: Response) => {

});
cartRouter.get("/:id/products", findById, (req: Request, res: Response) => {

});
cartRouter.post("/:id/products", findById, (req: Request, res: Response) => {

});
cartRouter.delete("/:id/products/:id_prod", findById, (req: Request, res: Response) => {

});

export default cartRouter;