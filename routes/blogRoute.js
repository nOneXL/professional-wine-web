import express from "express";
import * as ArticleController from '../controller/articleController.js'

var router = express.Router();

router.get('/page', ArticleController.getBlogPage);

router.get('/new', ArticleController.getNewPage);

router.get('/edit/:id', ArticleController.getEditPage)

router.get("/article/:id", ArticleController.getArticlePage);

router.get("/", ArticleController.get)

router.get("/:id", ArticleController.getById)

router.delete("/:id", ArticleController.remove);

router.post("/", ArticleController.create);

router.put("/:id", ArticleController.update);

export { router as blogRouter };