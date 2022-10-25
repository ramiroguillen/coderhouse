import dotenv from "dotenv";

dotenv.config(); // configuration .env

import express from "express"; // import express
import { Server as HttpServer } from "http"; // import http
import { Server as IOServer } from "socket.io"; // import socket.io
import ejs from "ejs";

import router from "./src/routes/index.js";  // import router

const PORT = process.env.PORT || 8080; // port config
const app = express(); // express app init

const httpServer = new HttpServer(app); // http server init
export const io = new IOServer(httpServer); // socket.io init

// app config
app.use(express.json()); // parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // parses incoming requests with urlencoded payloads
app.use(express.static("public"));
// view engine
app.set("view engine", "ejs");
app.set("views", "./src/views"); // views directory

app.use("/", router); // router config

// launch http server on port, if error log error
httpServer.listen(PORT).on("error", (error) => console.log(`SERVER: ${error}`));

import log from "./src/apis/logApi.js";
import chat from "./src/apis/chatApi.js"
import products from "./src/apis/productsApi.js";

// launch socket.io
io.on("connection", socket => { // on new connection

    socket.emit("log"); // request client data
    socket.on("logged", (data) => { // recieve data from client
        log.createNew(data); // store data
    });

    socket.emit("chat", chat.getAll()); // send stored data
    socket.on("message", (data) => {
        chat.createNew(data);
        io.sockets.emit("chat", chat.getAll()); // send data to all clients
    });

    socket.emit("products", products.getAll());
    socket.on("new-product", (data) => {
        products.createNew(data);
        io.sockets.emit("products", products.getAll());
    });
});