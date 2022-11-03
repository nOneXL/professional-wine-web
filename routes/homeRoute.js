import express from "express";

var router = express.Router();

router.get('/', function(req, res) {
    res.render('pages/home.ejs');
  });


export { router as homeRouter };
