"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_mw_1 = __importDefault(require("../middlewares/auth.mw"));
const findById_mw_1 = __importDefault(require("../middlewares/findById.mw"));
const productsRouter = (0, express_1.Router)();
productsRouter.get("/:id", findById_mw_1.default, (req, res) => {
});
productsRouter.post("/", auth_mw_1.default, (req, res) => {
});
productsRouter.put("/:id", auth_mw_1.default, findById_mw_1.default, (req, res) => {
});
productsRouter.delete("/:id", auth_mw_1.default, findById_mw_1.default, (req, res) => {
});
exports.default = productsRouter;
