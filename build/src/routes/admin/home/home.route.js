"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const home_controller_1 = __importDefault(require("@controllers/admin/home/home.controller"));
router.post('/get-summary', home_controller_1.default.getSummary);
exports.default = router;
