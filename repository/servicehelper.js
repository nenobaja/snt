var servicehelper = {};
var usersdata = require("./data.json");



servicehelper.fromIdsToUsers = function (ids) {

    var users = [];

    for (var n = 0; users.length < ids.length && n < usersdata.length; n++) {

        if (ids.indexOf(usersdata[n].id) != -1) {


            users.push(usersdata[n]);
        }
    }

    return users;
}

module.exports = servicehelper;