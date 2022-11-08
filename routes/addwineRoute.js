import express from "express";

var router = express.Router();

router.get('/addwine', function(req, res) {
    res.render('pages/addwine.ejs');
  });


export { router as addwineRoute };