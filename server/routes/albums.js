const express = require("express");
const router = express.Router();
const spotifyApi = require("../app");

router.get("/", function (req, res, next) {
  spotifyApi.getMyTopTracks({ limit: 10 }).then(
    (data) => res.send(data.body),
    (err) => console.log("Cannot get top albums", err)
  );
});

module.exports = router;