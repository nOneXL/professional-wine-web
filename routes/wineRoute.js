import express from "express";
import * as wineController from "../controllers/wineController.js";

const wineRouter = express.Router();

wineRouter.get("/page", wineController.getWinesPage);

wineRouter.get("/new", wineController.getNewPage);

wineRouter.get("/edit/:id", wineController.getEditPage);

wineRouter.get("/addoffer/:id", wineController.getNewOfferPage);

wineRouter.get("/page/:id", wineController.getWinePage);

wineRouter.get("/", wineController.get);

wineRouter.get("/:id", wineController.getById);

wineRouter.delete("/:id", wineController.remove);

wineRouter.delete("/removeoffer/:id&:num", wineController.removeOffer);

wineRouter.post("/", wineController.create);

wineRouter.put("/:id", wineController.update);

wineRouter.put("/addoffer/:id", wineController.addOffer);

export default wineRouter;
