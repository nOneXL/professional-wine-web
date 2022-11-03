import "dotenv/config";
import express from "express";
import methodOverride from "method-override";
import * as mongoose from "mongoose";

import { credentialRouter } from "./routes/credentials.js";
import { indexRouter } from "./routes/index.js";
import { blogRouter } from './routes/blogRoute.js';
import { homeRouter } from './routes/homeRoute.js';
import { wineryRouter } from './routes/wineryRoute.js';
import { wineRouter } from './routes/wineRoute.js';
import { countryRouter } from './routes/countryRoute.js';

mongoose.connect(process.env.connectionString, {dbName: process.env.db})
  .then(() => {
    const app = express();
    // set the view engine to ejs and pug
    app.set("view engine", ["ejs", "pug"]);

    app.use(express.urlencoded({ extended: false }))
    app.use(methodOverride('_method'))
    app.use(express.static('views'))
    app.use(express.static('public'))

    app.use(
        // indexRouter,
        credentialRouter
    );
    app.use("/", homeRouter)
    app.use("/blog", blogRouter)
    app.use("/winery", wineryRouter)
    app.use("/wine", wineRouter)
    app.use("/country", countryRouter)

    app.listen(process.env.PORT || 8080, ()=> console.log('Connected to the Database.'));
  })
  .catch(err => console.error(err));