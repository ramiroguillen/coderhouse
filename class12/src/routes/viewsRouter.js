import { Router } from "express";
import products from "../apis/productsApi.js";

const viewsRouter = Router();

viewsRouter.get("/", (req, res) => {
    res.render("main")
});

viewsRouter.post("/products", async (req, res) => {
    await products.createNew(req.body);
    res.redirect("/");
});

viewsRouter.get("/products", (req, res) => {
    let elements = products.getAll();
    res.render("main", { products: elements });
});

export default viewsRouter;