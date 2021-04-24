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
  });
});


router.post("/:showId/viewedShow", (req, res, next) => {
  console.log(req.params);

  User.findByIdAndUpdate(
    req.session.user._id,
    { $addToSet: { viewedShows: req.params.showId } },
    { new: true }
  ).then((returnedShow) => {
    res.redirect(`/show/${req.params.showId}`)
  });
});

router.post("/:showId/planToWatch", (req, res, next) => {
  // console.log(req.params);
  console.log("LOOK HERE",req.session.user);

  User.findByIdAndUpdate(
    req.session.user._id,
    { $addToSet: { planToWatch: req.params.showId } },
    { new: true }
  ).then((user) => {
    console.log(user)
    res.redirect(`/show/${req.params.showId}`)
  });
});



module.exports = router;
