import express from "express";
import * as credentialController from "../controllers/credentialController.js";
import passport from "passport";

const credentialRouter = express.Router();

credentialRouter.get("/login", (req, res) => {
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

export default credentialRouter;
