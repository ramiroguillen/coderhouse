import { Request, Response, NextFunction } from "express";

async function findById(req: Request, res: Response, next: NextFunction) {
    let element;
    if (element) {
        next();
    } else { res.json({ error: "item not found" }) }
}

export default findById;