import express from "express";
import * as WineryController from "../controllers/wineryController.js";

const wineryRouter = express.Router();

wineryRouter.get("/", WineryController.get);

wineryRouter.get("/new", WineryController.getNewPage);

wineryRouter.get("/map", WineryController.getmap);

wineryRouter.get("/wineries", WineryController.getwineries);

wineryRouter.get("/:id", WineryController.getById);

wineryRouter.delete("/:id", WineryController.remove);

wineryRouter.post("/", WineryController.create);

wineryRouter.put("/:id", WineryController.update);

export default wineryRouter;
