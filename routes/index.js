const router = require("express").Router();

const jikanjs = require("jikanjs");

/* GET home page */
router.get("/", (req, res, next) => {
  let series = {
    stitle: "Example",
  };

  jikanjs
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

  res.render("index", { series });
});

module.exports = router;
