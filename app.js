import "dotenv/config";
import express from "express";
import methodOverride from "method-override";
import * as mongoose from "mongoose";
import blogRouter from "./routes/blogRoute.js";
import countryRouter from "./routes/countryRoute.js";
import credentialRouter from "./routes/credentialRoute.js";
import homeRouter from "./routes/homeRoute.js";
import wineRouter from "./routes/wineRoute.js";
import wineryRouter from "./routes/wineryRoute.js";
import initializePassport from "./utils/passport.js";
import flash from "express-flash";
import session from "express-session";
import passport from "passport";
import {
  checkAuthenticated,
  checkNotAuthenticated,
  isAdmin,
} from "./utils/sessionValidation.js";

const app = express();

initializePassport(passport);

// DB connection
mongoose
  .connect(process.env.CONNECTION_STRING, { dbName: process.env.DB })
  .then(() => console.log("Connected to the Database."))
  .catch((err) => console.error(err));

// set the view engine to ejs and pug
app.set("view engine", ["ejs", "pug"]);

// Settings and middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(express.json());
app.use(flash());
app.use(
  session({
    secret: process.env.ACCESS_TOKEN_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
// app.use((err, req, res, next) => {
//   handleError(err, res);
// });

// Routes
app.use("/", homeRouter);
app.use("/users", checkNotAuthenticated, credentialRouter);
app.use("/blog", checkAuthenticated, isAdmin, blogRouter);
app.use("/winery", checkAuthenticated, isAdmin, wineryRouter);
app.use("/wines", checkAuthenticated, isAdmin, wineRouter);
app.use("/country", countryRouter);
app.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
  });
  res.redirect("/users/login");
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App listening on port ${port}`));
