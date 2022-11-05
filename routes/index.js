import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile("C:\Users\tlevius\Desktop\professional-wine-web\views\index.ejs");
});

router.get("/home", (req, res) => {
    res.render("index.html");
});

export { router as indexRouter };