const express = require("express");
const router = express.Router();

const path = require("path");

// Route pour servir la page game.html
// router.get("/game/play", (req, res) => {
//   res.sendFile(path.join(__dirname, "public/play.html"));
// });
// Route pour servir la page game.html
// router.get("/game/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public/game.html"));
// });

  router.get("/play", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/play.html"));
  });

module.exports = router;
