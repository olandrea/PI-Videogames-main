const { Router } = require("express");
const videogamesRouter = Router();

videogamesRouter.get("/", (req, res) => {
    res.send("Estoy en videogames");
});

module.exports = videogamesRouter;