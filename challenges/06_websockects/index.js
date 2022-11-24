import dotenv from "dotenv";
import express from "express";
import { Server as HttpServer } from "http";
import { Server as IOServer } from "socket.io";

import router from "./src/routes/index.js";
import log from "./src/apis/logApi.js";
import chat from "./src/apis/chatApi.js"
import products from "./src/apis/productsApi.js";

dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", router);

app.set("view engine", "ejs");
app.set("views", "./src/views");

httpServer.listen(PORT).on("error", (error) => console.log(`SERVER: ${error}`));

io.on("connection", socket => {

    socket.emit("log");
    socket.on("logged", (data) => {
        log.createNew(data);
    });

    socket.emit("chat", chat.getAll());
    socket.on("message", (data) => {
        chat.createNew(data);
        io.sockets.emit("chat", chat.getAll());
    });

    socket.emit("products", products.getAll());
    socket.on("new-product", (data) => {
        products.createNew(data);
        io.sockets.emit("products", products.getAll());
    });
});