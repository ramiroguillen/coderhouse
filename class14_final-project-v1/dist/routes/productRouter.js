"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_mw_1 = __importDefault(require("../middlewares/auth.mw"));
const findById_mw_1 = require("../middlewares/findById.mw");
const Products_1 = __importDefault(require("../classes/Products"));
const productRouter = (0, express_1.Router)();
productRouter.get("/:id", findById_mw_1.findProductById, (req, res) => {
    res.json(Products_1.default.getById(req.params.id));
});
productRouter.post("/", auth_mw_1.default, (req, res) => {
    res.json(Products_1.default.createNew(req.body));
});
productRouter.put("/:id", auth_mw_1.default, findById_mw_1.findProductById, (req, res) => {
    res.json(Products_1.default.updateById(req.params.id, req.body));
});
productRouter.delete("/:id", auth_mw_1.default, findById_mw_1.findProductById, (req, res) => {
    res.json(Products_1.default.deleteById(req.params.id));
});
exports.default = productRouter;
