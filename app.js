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
.then(() => console.log('Connected to the Database.'))
.catch(err => console.error(err));

const app = express();
// set the view engine to ejs and pug
app.set("view engine", ["ejs", "pug"]);

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.use(credentialRouter);
app.use("/", homeRouter);
app.use("/blog", blogRouter);
app.use("/winery", wineryRouter);
app.use("/wines", wineRouter);
app.use("/country", countryRouter);

const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log(`App listening on port ${port}`));
