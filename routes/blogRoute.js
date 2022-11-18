import express from "express";
import * as ArticleController from "../controllers/articleController.js";
import {checkAuthenticated} from "../utils/sessionValidation.js";

const blogRoute = express.Router();

blogRoute.get("/page", ArticleController.getBlogPage);

blogRoute.get("/new", checkAuthenticated, ArticleController.getNewPage);

blogRoute.get("/edit/:id", checkAuthenticated, ArticleController.getEditPage);

blogRoute.get("/article/:id", ArticleController.getArticlePage);

blogRoute.get("/", ArticleController.get);

blogRoute.get("/:id", ArticleController.getById);

blogRoute.delete("/:id", checkAuthenticated, ArticleController.remove);

blogRoute.post("/", checkAuthenticated, ArticleController.create);

blogRoute.put("/:id", checkAuthenticated, ArticleController.update);

export default blogRoute;
