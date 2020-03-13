import {App} from "./server";

const main=async()=>{
   const app=new App(3000); 
   await app.listen();
}

main();