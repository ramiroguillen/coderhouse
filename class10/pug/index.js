import express from "express"; // import express
import pug from "pug"; // import view engine
import router from "./src/routes/index.js"; // import router

const PORT = process.env.PORT || 8080; // port config
const app = express(); // express app init

// app config
app.use(express.json()); // parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // parses incoming requests with urlencoded payloads

// view engine config
app.set("view engine", "pug");
app.set("views", "./src/views");

// routes config
app.use("/", router);

app.listen(PORT).on("error", (err) => console.log(`SERVER: ${err}`));
