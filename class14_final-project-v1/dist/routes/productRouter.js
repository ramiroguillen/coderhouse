"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_mw_1 = __importDefault(require("../middlewares/auth.mw"));
const findById_mw_1 = __importDefault(require("../middlewares/findById.mw"));
const productRouter = (0, express_1.Router)();
productRouter.get("/:id", findById_mw_1.default, (req, res) => {
});
productRouter.post("/", auth_mw_1.default, (req, res) => {
});
productRouter.put("/:id", auth_mw_1.default, findById_mw_1.default, (req, res) => {
});
productRouter.delete("/:id", auth_mw_1.default, findById_mw_1.default, (req, res) => {
});
exports.default = productRouter;
