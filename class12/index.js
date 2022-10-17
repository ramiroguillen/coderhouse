const dotenv = require("dotenv");
dotenv.config(); // configuration .env

const express = require("express"); // import express
const { Server: HttpServer } = require("http"); // import http
const { Server: IOServer } = require("socket.io"); // import socket.io
const { create } = require("express-handlebars");

const PORT = process.env.PORT || 8080; // port config
const app = express(); // express app init

const router = require("./src/routes/index");  // import router

const hbs = create(); // view engine handlebars 

const httpServer = new HttpServer(app); // http server init
const io = new IOServer(httpServer); // socket.io init

// app config
app.use(express.json()); // parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // parses incoming requests with urlencoded payloads
app.use(express.static(__dirname + "/public")); // declare static files directory
// view engine
app.engine("handlebars", hbs.engine); // declare view engine
app.set("view engine", "handlebars");
app.set("views", "./views"); // views directory

app.use("/api", router); // router config

// show index.html to client at route "/"
// app.get("/", (req, res) => { res.sendFile("/public/index.html") });
// launch http server on port, if error log error
httpServer.listen(PORT).on("error", (error) => console.log(`SERVER: ${error}`));

let log = []; // init socket.io log
let chat = []; // & chat storages

// launch socket.io
io.on("connection", socket => { // on new connection
    socket.emit("log"); // request client data
    socket.on("logged", (user) => { // recieve data from client
        log.push(user); // store data
    });
    socket.emit("chat", chat); // send stored data
    socket.on("message", (message) => {
        chat.push(message);
        io.sockets.emit("chat", chat); // send data to all clients
    });
    socket.emit("products", products);
    socket.on("productsUpdate", (update) => {

    })
});
