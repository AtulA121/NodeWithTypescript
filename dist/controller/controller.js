"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Controller {
    constructor() {
    }
    getRequest(req, res, next) {
        console.log("/getReqeust : ");
        res.send({
            result: true
        });
    }
    verify(req, res, next) {
        console.log("verify token : ");
        res.status(404).send({
            result: false
        });
    }
}
exports.Controller = Controller;
