import {Routes} from "./handleRoutes";
import {Controller} from "../controller/controller";

export class Listeners{
    routes : Routes;
    controller : Controller;
    constructor(){
        this.controller=new Controller();
        this.routes=new Routes()
    }

    async addListeners(){
        await this.routes.addListener({url : "/", verify : true, call : this.controller.getRequest});
    }

}