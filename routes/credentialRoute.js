import express from "express";
import * as credentialController from "../controllers/credentialController.js";
import passport from "passport";

const credentialRouter = express.Router();

credentialRouter.get("/login", (req, res) => {
    console.log(req.isAuthenticated())
    res.render("login.pug");
});

credentialRouter.get("/register", (req, res) => {
  res.render("register.pug");
});

credentialRouter.post("/register", credentialController.create);

credentialRouter.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/users/login",
    failureFlush: true,
  })
);

credentialRouter.post("/test", credentialController.test);

export default credentialRouter;
