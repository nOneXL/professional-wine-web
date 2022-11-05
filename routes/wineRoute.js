import express from "express";
import * as wineController from '../controller/wineController.js'

var router = express.Router();

router.get('/page', wineController.getWinesPage);

router.get('/new', wineController.getNewPage);

router.get('/edit/:id', wineController.getEditPage)

router.get("/page/:id", wineController.getWinePage);

router.get("/", wineController.get)

router.get("/:id", wineController.getById)

router.delete("/:id", wineController.remove);

router.post("/", wineController.create);

router.put("/:id", wineController.update);

export { router as wineRouter };