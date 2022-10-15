import "dotenv/config";
import express from "express";
import { pathHandler } from "./utils/pathHandler.js";

// App instances
const app = express();
const router = express.Router()

// App view engines
app.set("view engine", "ejs");
app.set("view engine", "pug")
app.set("views", pathHandler("views"))

router.get("/", (req, res) => {
    res.render("index.pug", {names: ["Gil", "Tomer", "Hai", "Dan"]});
});

app.get("/", router)
app.listen(process.env.PORT);