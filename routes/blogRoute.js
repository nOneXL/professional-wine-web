import express from "express";
import * as ArticleController from "../controllers/articleController.js";

const blogRoute = express.Router();

blogRoute.get("/page", ArticleController.getBlogPage);

blogRoute.get("/new", ArticleController.getNewPage);

blogRoute.get("/edit/:id", ArticleController.getEditPage);

blogRoute.get("/article/:id", ArticleController.getArticlePage);

blogRoute.get("/", ArticleController.get);

blogRoute.get("/:id", ArticleController.getById);

blogRoute.delete("/:id", ArticleController.remove);

blogRoute.post("/", ArticleController.create);

blogRoute.put("/:id", ArticleController.update);

export default blogRoute;
