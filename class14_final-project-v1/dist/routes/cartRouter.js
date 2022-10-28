"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const findById_mw_1 = __importDefault(require("../middlewares/findById.mw"));
const cartRouter = (0, express_1.Router)();
cartRouter.post("/", (req, res) => {
});
cartRouter.delete("/:id", findById_mw_1.default, (req, res) => {
});
cartRouter.get("/:id/products", findById_mw_1.default, (req, res) => {
});
cartRouter.post("/:id/products", findById_mw_1.default, (req, res) => {
});
cartRouter.delete("/:id/products/:id_prod", findById_mw_1.default, (req, res) => {
});
exports.default = cartRouter;
