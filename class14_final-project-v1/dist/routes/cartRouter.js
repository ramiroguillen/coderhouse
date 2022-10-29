"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Carts_1 = __importDefault(require("../classes/Carts"));
const findById_mw_1 = require("../middlewares/findById.mw");
const cartRouter = (0, express_1.Router)();
cartRouter.post("/", (req, res) => {
    res.json(Carts_1.default.createNew(req.body));
});
cartRouter.delete("/:id", findById_mw_1.findCartById, (req, res) => {
    res.json(Carts_1.default.deleteById(req.params.id));
});
cartRouter.get("/:id/products", findById_mw_1.findCartById, (req, res) => {
    res.json(Carts_1.default.getCartProducts(req.params.id));
});
cartRouter.post("/:id/products", findById_mw_1.findCartById, (req, res) => {
    res.json(Carts_1.default.addItem(req.params.id, req.body));
});
cartRouter.delete("/:id/products/:id_prod", findById_mw_1.findCartById, (req, res) => {
    res.json(Carts_1.default.deleteProductFromCart(req.params.id, req.params.id_prod));
});
exports.default = cartRouter;
