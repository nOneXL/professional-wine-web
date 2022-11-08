import express from "express";
import * as countryController from "../controllers/countryController.js";

const countryRoute = express.Router();

countryRoute.get("/", countryController.get);

countryRoute.get("/:id", countryController.getById);

countryRoute.delete("/:id", countryController.remove);

countryRoute.post("/", countryController.create);

countryRoute.put("/:id", countryController.update);

export default countryRoute;
