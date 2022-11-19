import express from "express";
import * as countryController from "../controllers/countryController.js";
import {checkAuthenticated} from "../utils/sessionValidation.js";

const countryRoute = express.Router();

countryRoute.get("/", countryController.get);

countryRoute.get("/:id", countryController.getById);

countryRoute.delete("/:id", checkAuthenticated, countryController.remove);

countryRoute.post("/", checkAuthenticated, countryController.create);

countryRoute.put("/:id", checkAuthenticated, countryController.update);

export default countryRoute;
