var express = require('express');
var router = express.Router();
var service = require("../repository/friendservice");


router.get('/', function (req, res, next) {

  res.render('index', { title: 'SocialNetwork' });

});


router.get('/users', function (req, res, next) {

  res.render('users', {
    users: service.getUsers()
  });

});


router.get('/users/:userid/details', function (req, res, next) {

  res.render('userdetails', {
    userdetails: service.getUserDetails(req.params.userid)
  });

});


router.get('/users/:userid/friends', function (req, res, next) {

  res.json(service.getFriends(req.params.userid));

});


router.get('/users/:userid/suggestedfriends', function (req, res, next) {

  res.json(service.getSuggestedFriends(req.params.userid));

});


router.get('/users/:userid/friendsoffriends', function (req, res, next) {

  res.json(service.getFriendsOfFriends(req.params.userid));

});

module.exports = router;



