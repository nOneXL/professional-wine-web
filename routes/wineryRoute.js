import express from "express";
import * as WineryController from '../controller/wineryController.js'

var router = express.Router();

router.get('/', WineryController.get);

router.get("/new", WineryController.getNewPage);

router.get('/map', WineryController.getmap);

router.get('/wineries', WineryController.getwineries);

router.get("/:id", WineryController.getById);

router.delete("/:id", WineryController.remove);

router.post("/", WineryController.create);

router.put("/:id", WineryController.update);

export { router as wineryRouter };