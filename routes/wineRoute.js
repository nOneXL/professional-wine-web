import express from "express";
import * as wineController from "../controllers/wineController.js";
import {checkAuthenticated} from "../utils/sessionValidation.js";

const wineRouter = express.Router();

wineRouter.get("/page", wineController.getWinesPage);

wineRouter.get("/statistics", wineController.getStatisticsPage);

wineRouter.get("/new", checkAuthenticated, wineController.getNewPage);

wineRouter.get("/edit/:id", checkAuthenticated, wineController.getEditPage);

wineRouter.get("/addoffer/:id", checkAuthenticated, wineController.getNewOfferPage);

wineRouter.get("/page/:id", wineController.getWinePage);

wineRouter.get("/", wineController.get);

wineRouter.get("/:id", wineController.getById);

wineRouter.delete("/:id", checkAuthenticated, wineController.remove);

wineRouter.delete("/removeoffer/:id&:num", checkAuthenticated, wineController.removeOffer);

wineRouter.post("/", checkAuthenticated, wineController.create);

wineRouter.put("/:id", checkAuthenticated, wineController.update);

wineRouter.put("/addoffer/:id", checkAuthenticated, wineController.addOffer);

export default wineRouter;
