import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.pug");
});

router.get("/home", (req, res) => {
  res.render("index.pug");
});

export { router as indexRouter };
