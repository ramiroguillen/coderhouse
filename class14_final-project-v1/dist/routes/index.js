"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRouter_1 = __importDefault(require("./productRouter"));
const cartRouter_1 = __importDefault(require("./cartRouter"));
const router = (0, express_1.Router)();
router.use("/api/products", productRouter_1.default);
router.use("/api/carts", cartRouter_1.default);
exports.default = router;
