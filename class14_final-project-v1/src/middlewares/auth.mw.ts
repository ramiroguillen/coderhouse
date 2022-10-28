import { Request, Response, NextFunction } from "express";

const admin: Boolean = true;

async function auth(req: Request, res: Response, next: NextFunction) {
    if (admin) {
        next();
    } else { res.json({ error: "no credentials for this operation" }) }
}

export default auth;