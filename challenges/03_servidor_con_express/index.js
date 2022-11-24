const express = require("express");
const p = require("./container");

const app = express();

const PORT = 8080;

app.get("/products", (req, res) => {
    res.json(p.getAll())
})

app.get("/randomProduct", (req, res) => {
    res.json(p.getById(Math.floor(Math.random() * p.products.length + 1)));
})

app
    .listen(PORT, () => { console.log(`SERVER: Running at https://localhost:${PORT}`) })
    .on("error", (error) => { console.log(`SERVER: ${error}`) });