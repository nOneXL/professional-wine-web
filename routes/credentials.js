import express from "express";

const router = express.Router();

router.get('/login', (req, res) => {
    res.render("templates/login.pug");
});

router.get('/register', (req, res) => {
    res.render("templates/register.pug");
});

export { router as credentialRouter };
