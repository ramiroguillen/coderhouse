import { Router } from "express";
import products from "../apis/productsApi.js";

const viewsRouter = Router();

viewsRouter.get("/", (req, res) => {
    let page = "products-form";
    res.render("main", { page: page })
});

viewsRouter.post("/products", async (req, res) => {
    await products.createNew(req.body);
    res.redirect("/");
});

viewsRouter.get("/products", (req, res) => {
    let elements = products.getAll();
    let page = "products-table";
    res.render("main", { page: page, products: elements });
});

export default viewsRouter;