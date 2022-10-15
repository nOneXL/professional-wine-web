import "dotenv/config";
import express from "express";
import { pathHandler } from "./utils/pathHandler.js";

// App instances
const app = express();
const router = express.Router()

// App settings
app.set("view engine", "ejs");
app.set("view engine", "pug")
app.set("views", pathHandler("views"))

app.use(express.static(pathHandler("public")));

router.get("/", (req, res) => {
    res.render("index.pug");
});

app.get("/", router)
app.listen(process.env.PORT);