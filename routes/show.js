const router = require("express").Router();
const jikanjs = require("jikanjs");
const Shows = require("../models/Show.model");
const User = require("../models/User.model");

/* GET home page */
router.get("/:showId", (req, res, next) => {
  console.log(req.params);

  Shows.findById(req.params.showId).then((returnedShow) => {
    res.render("singleShow", { returnedShow });
  });
});

router.post("/:showId/addToFavourites", (req, res, next) => {
  console.log(req.params);

  User.findByIdAndUpdate(
    req.session.user._id,
    { $addToSet: { favoriteShows: req.params.showId } },
    { new: true }
  ).then((returnedShow) => {
    res.redirect(`/show/${req.params.showId}`)
    // res.render("singleShow", { returnedShow });
    //res.redirect("singleShow", { returnedShow });
    // window.location.pathname = "/";
  });
});

module.exports = router;
