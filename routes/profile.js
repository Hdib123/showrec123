const router = require("express").Router();
const MongoClient = require("mongodb").MongoClient;
const isLoggedIn = require("../middlewares/isLoggedIn");
const Shows = require("../models/Show.model");
const User = require("../models/User.model");
const mongoose = require("mongoose");


router.get("/", isLoggedIn, (req, res, next) => {

  User.findById(req.session.user._id).populate("favoriteShows viewedShows planToWatch").then((user) => {

    res.render("profile", { user });
  }).catch(err => {
    console.log(err)
    res.redirect("/")
  });
  //  res.render("profile", {user: req.session.user});
  //});
})

router.post("/:showId/removeFromFavorites", (req, res, next) => {
  console.log(req.params);

  Shows.fin


  User.findByIdAndUpdate(
    req.session.user._id,
   {$pull: { favoriteShows: req.params.showId }}, 
   {new: true})
    .then((updatedUser) => {
      console.log(updatedUser);
    res.redirect(`/profile`)
  });
});

router.post("/:showId/removeFromViewed", (req, res, next) => {

  User.findByIdAndUpdate(
    req.session.user._id,
   {$pull: { viewedShows: req.params.showId }}, 
   {new: true})
    .then((updatedUser) => {
      console.log(updatedUser);
    res.redirect(`/profile`)
  });
});

router.post("/:showId/removeFromPlanToWatch", (req, res, next) => {

  User.findByIdAndUpdate(
    req.session.user._id,
   {$pull: { planToWatch: req.params.showId }}, 
   {new: true})
    .then((updatedUser) => {
      console.log(updatedUser);
    res.redirect(`/profile`)
  });
});


router.post("/:dynamic/deleteUser", isLoggedIn, (req, res) => {
      // GET PAST THE 2 CHECKS WE CAN FINALLY DELETE STUFF
      console.log(req.session.user._id)
      User.findByIdAndDelete(req.session.user._id).then(() => {
        req.session.destroy((err) => {
          if (err) {
            return res
              .status(500)
              .render("auth/logout", { errorMessage: err.message });
          }
          res.redirect("/");
        });
      });
    });



module.exports = router;
// User.findById().then((response) => {
  // console.log(`test`, { response });