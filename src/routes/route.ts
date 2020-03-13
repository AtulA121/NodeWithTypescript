import {Router, Request, Response, NextFunction} from "express";
import {Controller} from "../controller/controller";
import {Routes} from "./handleRoutes";

const controller=new Controller();
const routes=new Routes();
const router=Router();

router.route("/").get(routes.getRequestHandle);
router.route("/").post(routes.postRequestHandle);

// router.route("/getData").get(controller.verify,controller.getRequest);
// router.route("/registerUser").post(controller.registerUser);
// router.route("/loginUser").post(controller.loginUser);
// router.route("/createEvent").post(controller.verify,controller.createEvent);

export default router;