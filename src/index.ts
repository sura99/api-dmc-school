import { Elysia } from "elysia";
import cors from "@elysiajs/cors";

//import controllers
import SchoolController from "./controllers/SchoolController";


const app = new Elysia()
.use(cors())
.get("/", () => "Hello Elysia")

// group schools
.group("/schools", app => app 
  .get("/", SchoolController.list)
  .get("/smis_code/:smis_code", SchoolController.smis_code)
  .get("/:id", SchoolController.show)
)



.listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
