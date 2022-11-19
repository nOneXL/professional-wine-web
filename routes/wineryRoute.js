import express from "express";
import * as WineryController from "../controllers/wineryController.js";
import {checkAuthenticated} from "../utils/sessionValidation.js";

const wineryRouter = express.Router();

wineryRouter.get("/", WineryController.get);

wineryRouter.get("/new", checkAuthenticated, WineryController.getNewPage);

wineryRouter.get("/map", WineryController.getmap);

wineryRouter.get("/wineries", WineryController.getwineries);

wineryRouter.get("/:id", WineryController.getById);

wineryRouter.delete("/:id", checkAuthenticated, WineryController.remove);

wineryRouter.post("/", checkAuthenticated, WineryController.create);

wineryRouter.put("/:id", checkAuthenticated, WineryController.update);

export default wineryRouter;
