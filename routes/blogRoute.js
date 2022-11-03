import express from "express";
import {Article} from '../models/articleModel.js'
import * as ArticleController from '../controller/articleController.js'

var router = express.Router();

router.get('/', ArticleController.get);

router.get('/new', async (req, res) => {
  res.render('pages/blog/new_blog.ejs', { article: new Article() })
});

router.get('/edit/:id', async (req, res) => {
  const {id} = req.params;
  const article = await Article.findById(id)
  res.render('pages/blog/edit_blog.ejs', { article: article })
})

router.get("/:id", ArticleController.getById);

router.delete("/:id", ArticleController.remove);

router.post("/", ArticleController.create);

router.put("/:id", ArticleController.update);

export { router as blogRouter };