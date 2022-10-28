"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const findById_mw_1 = __importDefault(require("../middlewares/findById.mw"));
const cartsRouter = (0, express_1.Router)();
cartsRouter.post("/", (req, res) => {
});
cartsRouter.delete("/:id", findById_mw_1.default, (req, res) => {
});
cartsRouter.get("/:id/products", findById_mw_1.default, (req, res) => {
});
cartsRouter.post("/:id/products", findById_mw_1.default, (req, res) => {
});
cartsRouter.delete("/:id/products/:id_prod", findById_mw_1.default, (req, res) => {
});
exports.default = cartsRouter;
