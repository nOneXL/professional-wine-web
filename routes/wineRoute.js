import express from "express";
import * as wineController from '../controller/wineController.js'

var router = express.Router();

router.get('/page', wineController.getWinesPage);

router.get('/new', wineController.getNewPage);

router.get('/edit/:id', wineController.getEditPage);

router.get('/addoffer/:id', wineController.getNewOfferPage);

router.get("/page/:id", wineController.getWinePage);

router.get("/", wineController.get)

router.get("/:id", wineController.getById)

router.delete("/:id", wineController.remove);

router.delete("/removeoffer/:id&:num", wineController.removeoffer);

router.post("/", wineController.create);

router.put("/:id", wineController.update);

router.put("/addoffer/:id", wineController.addoffer);

export { router as wineRouter };