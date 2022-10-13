const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

const PORT = process.env.PORT || 8080;
const app = express();
const router = express.Router();

const productsRouter = require("./src/routes/products");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/uploads"));
app.use("/api", router);

router.use("/products", productsRouter);

app
    .listen(PORT, () => console.log(`SERVER: Running at https://localhost:${PORT}`))
    .on("error", (error) => console.log(`SERVER: ${error}`));