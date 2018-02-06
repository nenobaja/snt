var service = {};
var usersdata = require("./data.json");
var servicehelper = require("./servicehelper.js");

service.getUsers = function(){

    var users = usersdata;

    return users;
}

service.getUserDetails = function(id){

    var userDetails;

    for (var i = 0; i < usersdata.length; i++) {
        if (id == usersdata[i].id) {
            userDetails = usersdata[i];
            break;
        }
    }
    return userDetails;
}


service.getFriends = function (id) {

    var friendsIds = [];
    
    for (var f = 0; f < usersdata.length; f++) {
        if (id == usersdata[f].id) {
            friendsIds = usersdata[f].friends;
            user = usersdata[f];
            break;
        }
    }
    var friends = servicehelper.fromIdsToUsers(friendsIds);
    return friends;
}


service.getSuggestedFriends = function (id) {

    var friends = service.getFriends(id);
    var friendsOfFriendsMap = new Map();
    var suggestedFriendsIds = [];

    for (var i = 0; i < friends.length; i++) {

        var friendId = friends[i].id;
        var friendsOfThefriend = service.getFriends(friendId);

        for (var j = 0; j < friendsOfThefriend.length; j++) {

            var currentFriendOfTheFriend = friendsOfThefriend[j];

            if (currentFriendOfTheFriend.id == id || friends.indexOf(currentFriendOfTheFriend) != -1) {

                continue;
            }

            if (friendsOfFriendsMap.get(currentFriendOfTheFriend.id) != undefined) {

                friendsOfFriendsMap.set(
                    currentFriendOfTheFriend.id,
                    friendsOfFriendsMap.get(currentFriendOfTheFriend.id) + 1);
            }
            else {
                friendsOfFriendsMap.set(currentFriendOfTheFriend.id, 1);
            }
        }
    }

    for (var [key, value] of friendsOfFriendsMap) {

        if (value > 1) {
            suggestedFriendsIds.push(key);
        }
    }
    var suggestedFriends = servicehelper.fromIdsToUsers(suggestedFriendsIds);
    return suggestedFriends;
}


service.getFriendsOfFriends = function (id) {

    var friends = service.getFriends(id);
    var friendsOfFriendsMap = new Map();

    for (var i = 0; i < friends.length; i++) {

        var friendId = friends[i].id;
        var friendsOfTheFriend = service.getFriends(friendId);

        for (var j = 0; j < friendsOfTheFriend.length; j++) {

            var currentFriendOfTheFriend = friendsOfTheFriend[j];

            if (friendsOfFriendsMap.get(currentFriendOfTheFriend.id) != undefined) {

                friendsOfFriendsMap.set(
                    currentFriendOfTheFriend.id,
                    friendsOfFriendsMap.get(currentFriendOfTheFriend.id) + 1);
            }
            else {
                friendsOfFriendsMap.set(currentFriendOfTheFriend.id, 1);
            }
        }
    }

    var keysIter = friendsOfFriendsMap.keys();
    var arrayOfKeys = [...keysIter];
    var friendsOfFriendsArr = servicehelper.fromIdsToUsers(arrayOfKeys);

    return friendsOfFriendsArr;
}


module.exports = service;