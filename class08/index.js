const express = require("express");
const dotenv = require("dotenv");
const products = require("./container");

dotenv.config();

const PORT = process.env.PORT || 8888;

const app = express();

app.use(express.json());

app.get("/api/products", async (req, res) => {
    res.json(await products.getAll());
});

app.get("/api/products/:id", async (req, res) => {
    res.json(await products.getById(req.params.id));
});

app.post("/api/products", async (req, res) => {
    res.json(await products.createNew(req.body));
});

app.put("/api/products/:id", async (req, res) => {
    res.json(await products.updateById(req.params.id, req.body));
});

app.delete("/api/products/:id", async (req, res) => {
    res.json(await products.deleteById(req.params.id));
});

app
    .listen(PORT, () => console.log(`SERVER: Running at https://localhost:${PORT}`))
    .on("error", (error) => console.log(`SERVER: ${error}`));