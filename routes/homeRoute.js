import express from "express";

const homeRouter = express.Router();

homeRouter.get("/", function (req, res) {
  res.render("pages/home.ejs");
});

export default homeRouter;
