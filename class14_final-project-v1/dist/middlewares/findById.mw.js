"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCartById = exports.findProductById = void 0;
const Products_1 = __importDefault(require("../classes/Products"));
const Carts_1 = __importDefault(require("../classes/Carts"));
function findProductById(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let item = Products_1.default.items.find(e => e.id === parseInt(req.params.id));
        if (item) {
            next();
        }
        else {
            res.json({ error: "item not found" });
        }
    });
}
exports.findProductById = findProductById;
function findCartById(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let item = Carts_1.default.items.find(e => e.id === parseInt(req.params.id));
        if (item) {
            next();
        }
        else {
            res.json({ error: "item not found" });
        }
    });
}
exports.findCartById = findCartById;
