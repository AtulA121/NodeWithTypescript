"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller/controller");
const controller = new controller_1.Controller();
const router = express_1.Router();
router.route("/getData").get(controller.verify, controller.getRequest);
exports.default = router;
