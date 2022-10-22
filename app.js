import "dotenv/config";
import express from "express";
import { credentialRouter } from "./routes/credentials.js";
import { indexRouter } from "./routes/index.js";

// App instances
const app = express();

// App view engines
app.set("view engine", ["ejs", "pug"]);

// Static folder
app.use(express.static("public"));

// Routes
app.use(
    indexRouter,
    credentialRouter
);

app.listen(process.env.PORT);