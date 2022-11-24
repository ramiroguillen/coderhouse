import dotenv from "dotenv";
import express from "express";

import router from "./routes/index";

dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", router);

app.listen(PORT, () => console.log(`SERVER: ${PORT}`)).on("error", (err) => console.log(`SERVER ERROR: ${err}`));