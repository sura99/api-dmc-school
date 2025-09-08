import { Elysia } from "elysia"
import cors from "@elysiajs/cors"

//import controllers
import SchoolController from "./controllers/SchoolController"
import CctController from "./controllers/CctController"
import SchoolMisController from "./controllers/SchoolMisController"

const app = new Elysia()
.use(cors())
.get("/", () => "Hello API PBN3")

// group schools
.group("/schools", app => app 
  .get("/", SchoolController.list)
  .get("/smis_code/:smis_code", SchoolController.smis_code)
  .get("/:id", SchoolController.show)
)

// group schoolMIS
.group("/schoolmis", app => app
  .get("/", SchoolMisController.list)
  .get("/:id", SchoolMisController.show)
  .get("/smis_code/:smis_code", SchoolMisController.smis_code)
)

// group CCT
.group("/cct", app => app
  .get("/", CctController.list)
  .get("/:id", CctController.show)
  .get("/smis_code/:smis_code", CctController.smis_code)
)



.listen(4000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
