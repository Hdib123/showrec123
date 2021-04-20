const router = require("express").Router();
const MongoClient = require("mongodb").MongoClient;
const jikanjs = require("jikanjs");
const Shows = require("../models/Show.model");

/* GET home page */
router.get("/", (req, res, next) => {
  let series = {
    stitle: "Example",
  };
  Shows.find().then((response) => {
    console.log(`test`, { response });
    res.render("index", { response });
  });
});

/*  jikanjs
    .loadAnime(19815, "episodes")
    .then((response) => {
      response.episodes.forEach((element) => {
        console.log(
          `${element.episode_id}: ${element.title} - ${element.title_romanji} - ${element.title_japanese}`
        );
      });
    })
    .catch((err) => {
      console.error(err); // in case a error happens
    });
    */

module.exports = router;
