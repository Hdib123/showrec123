const router = require("express").Router();
const MongoClient = require("mongodb").MongoClient;
const isLoggedIn = require("../middlewares/isLoggedIn");
const Shows = require("../models/Show.model");
const User = require("../models/User.model");
const mongoose = require("mongoose");


router.get("/", isLoggedIn, (req, res, next) => {

  User.findById(req.session.user._id).populate("favoriteShows").then((user) => {

    res.render("profile", { user });
  });
  
  //  res.render("profile", {user: req.session.user});
  //});
})

module.exports = router
// User.findById().then((response) => {
  // console.log(`test`, { response });