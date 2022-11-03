import express from "express";
import * as countryController from '../controller/countryController.js'

var router = express.Router();

router.get('/', countryController.get);

router.get("/:id", countryController.getById);

router.delete("/:id", countryController.remove);

router.post("/", countryController.create);

router.put("/:id", countryController.update);

export { router as countryRouter };