const { Router } = require("express");

const router = Router(); // router init, import other routes
const productsRouter = require("./products.router");
// set routes
router.use("/products", productsRouter); 

module.exports = router;