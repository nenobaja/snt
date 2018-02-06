// var service = {};
// var usersdata = require("./data.json");
// var servicehelper = require("./servicehelper.js");





// service.getFriends = function (id) {


//     var friendsIds = [];
//     var user;

//     for (f = 0; f < usersdata.length; f++) {
//         if (id == usersdata[f].id) {
//             friendsIds = usersdata[f].friends;
//             user = usersdata[f];
//             break;
//         }
//     }

//     var friends = servicehelper.fromIdsToUsers(friendsIds);

//     // for (i = 0; friends.length < friendsIds.length && i < usersdata.length; i++) {
//     //     console.log(usersdata[i].id);
//     //     if (friendsIds.indexOf(usersdata[i].id) != -1) {
//     //         console.log("idi");
//     //         console.log(usersdata[i].id);
//     //         // var has = service.isArrayContainsValue(friendsIds, usersdata[i].id);
//     //         // if(has != false){
//     //             console.log("istina");

//     //         friends.push(usersdata[i]);
//     //     }
//     // }

//     return friends;
// }


// service.getSuggestedFriends = function (id) {

//     console.log("moj id je:");
//     console.log(id);

//     var pozicija = 1;

//     var friends = service.getFriends(id);
//     console.log("moji prijatelji");
//     console.log(friends);
//     console.log("njihov broj");
//     console.log(friends.length);

//     var friendsOfFriends = new Map();
//     var suggestedFriendsIds = [];

//     for (i = 0; i < friends.length; i++) {

//         console.log("testiranje pozicije");
//         console.log(i);
//         var pos = pozicija++;
//         console.log(pos);

//         console.log("prolazim kroz moje prijatelje");
//         console.log("trenuto sam na prijatelju id:");

//         var fid = friends[i].id;

//         console.log(fid);

//         console.log("pozicije:");
//         console.log(i);

//         var friendsOfAfriend = service.getFriends(fid);

//         console.log("trenutna pozivija i:");
//         console.log(i);

//         console.log("ovo su svi prijatelji mog prijatelja njihov broj i niz");
//         console.log(friendsOfAfriend);
//         console.log(friendsOfAfriend.length);
        


//         for (j = 0; j < friendsOfAfriend.length; j++) {

//             console.log("trenutna pozivija i:");
//             console.log(i);

//             console.log("prolazim kroz listu prijatalja mog prijatelja id:");
//             console.log(fid);
//             console.log("ovo je id prijatelja od mog prijatelja na kome smo sad");

//             var current = friendsOfAfriend[j];
//             console.log(current.id);

//             console.log("pozicije:");
//             console.log(j);





//             console.log("provericemo dal se prijatelj mog prijatelja nalazi u mojim prijateljima");
//             console.log("moj id ponovo");
//             console.log(id);
//             if (current.id == id || friends.indexOf(current) != -1) {
//                 console.log("nalazi se idemo na sledeceg");
//                 continue;
//             }
//             console.log("ne nalazi se");
//             console.log("onda cemo prijatelje od priatelja da smestamo u mapu na nacin koji zavidi od uslova");

//             console.log("ako je vec u mapi dodacemo mu jos jedan poen na value");
//             if (friendsOfFriends.get(current.id) != undefined) {
//                 console.log("jeste dodajemo mu jedan poen");
//                 friendsOfFriends.set(current.id, friendsOfFriends.get(current.id) + 1);
//             }
//             else {
//                 console.log("nije stavicemo ga po prvi put na mapu");
//                 friendsOfFriends.set(current.id, 1);
//             }
//             console.log("proveravamo ostale prijatelje od prijatelja id:");
//             console.log(fid);
//         }
//         console.log("dosao sam do kraja provere prijatelja od prijatelja id:");
//         console.log(fid);
//         console.log("konacanpozicija i:");
//         console.log(i);
       
//         console.log("trenutna pozivija i:");
//         console.log(i);


//     }
//     console.log("ovo je mapa prijatelja od prijatelja");
//     console.log(friendsOfFriends);

//     for (var [key, value] of friendsOfFriends) {

//         if (value > 1) {

//             suggestedFriendsIds.push(key);
//         }
//     }
//    var sug = servicehelper.fromIdsToUsers(suggestedFriendsIds);
//     return sug;

// }

// service.getFriendsOfFriends = function (id) {
    
//         console.log("moj id je:");
//         console.log(id);
    
//         var pozicija = 1;
    
//         var friends = service.getFriends(id);
//         console.log("moji prijatelji");
//         console.log(friends);
//         console.log("njihov broj");
//         console.log(friends.length);
    
//         var friendsOfFriends = new Map();
//         var suggestedFriendsIds = [];
    
//         for (i = 0; i < friends.length; i++) {
    
//             console.log("testiranje pozicije");
//             console.log(i);
//             var pos = pozicija++;
//             console.log(pos);
    
//             console.log("prolazim kroz moje prijatelje");
//             console.log("trenuto sam na prijatelju id:");
    
//             var fid = friends[i].id;
    
//             console.log(fid);
    
//             console.log("pozicije:");
//             console.log(i);
    
//             var friendsOfAfriend = service.getFriends(fid);
    
//             console.log("trenutna pozivija i:");
//             console.log(i);
    
//             console.log("ovo su svi prijatelji mog prijatelja njihov broj i niz");
//             console.log(friendsOfAfriend);
//             console.log(friendsOfAfriend.length);
            
    
    
//             for (j = 0; j < friendsOfAfriend.length; j++) {
    
//                 console.log("trenutna pozivija i:");
//                 console.log(i);
    
//                 console.log("prolazim kroz listu prijatalja mog prijatelja id:");
//                 console.log(fid);
//                 console.log("ovo je id prijatelja od mog prijatelja na kome smo sad");
    
//                 var current = friendsOfAfriend[j];
//                 console.log(current.id);
    
//                 console.log("pozicije:");
//                 console.log(j);
    
    
    
    
    
//                 console.log("provericemo dal se prijatelj mog prijatelja nalazi u mojim prijateljima");
//                 console.log("moj id ponovo");
//                 console.log(id);
//                 if (current.id == id || friends.indexOf(current) != -1) {
//                     console.log("nalazi se idemo na sledeceg");
//                     continue;
//                 }
//                 console.log("ne nalazi se");
//                 console.log("onda cemo prijatelje od priatelja da smestamo u mapu na nacin koji zavidi od uslova");
    
//                 console.log("ako je vec u mapi dodacemo mu jos jedan poen na value");
//                 if (friendsOfFriends.get(current.id) != undefined) {
//                     console.log("jeste dodajemo mu jedan poen");
//                     friendsOfFriends.set(current.id, friendsOfFriends.get(current.id) + 1);
//                 }
//                 else {
//                     console.log("nije stavicemo ga po prvi put na mapu");
//                     friendsOfFriends.set(current.id, 1);
//                 }
//                 console.log("proveravamo ostale prijatelje od prijatelja id:");
//                 console.log(fid);
//             }
//             console.log("dosao sam do kraja provere prijatelja od prijatelja id:");
//             console.log(fid);
//             console.log("konacanpozicija i:");
//             console.log(i);
           
//             console.log("trenutna pozivija i:");
//             console.log(i);
    
    
//         }
//         console.log("ovo je mapa prijatelja od prijatelja");
//         console.log(friendsOfFriends);
    
//         for (var [key, value] of friendsOfFriends) {
    
//             if (value > 1) {
    
//                 suggestedFriendsIds.push(key);
//             }
//         }
//        var sug = servicehelper.fromIdsToUsers(suggestedFriendsIds);
//         return service.getSuggestedFriends = function (id) {

//     console.log("moj id je:");
//     console.log(id);

//     var pozicija = 1;

//     var friends = service.getFriends(id);
//     console.log("moji prijatelji");
//     console.log(friends);
//     console.log("njihov broj");
//     console.log(friends.length);

//     var friendsOfFriends = new Map();
//     var suggestedFriendsIds = [];

//     for (i = 0; i < friends.length; i++) {

//         console.log("testiranje pozicije");
//         console.log(i);
//         var pos = pozicija++;
//         console.log(pos);

//         console.log("prolazim kroz moje prijatelje");
//         console.log("trenuto sam na prijatelju id:");

//         var fid = friends[i].id;

//         console.log(fid);

//         console.log("pozicije:");
//         console.log(i);

//         var friendsOfAfriend = service.getFriends(fid);

//         console.log("trenutna pozivija i:");
//         console.log(i);

//         console.log("ovo su svi prijatelji mog prijatelja njihov broj i niz");
//         console.log(friendsOfAfriend);
//         console.log(friendsOfAfriend.length);
        


//         for (j = 0; j < friendsOfAfriend.length; j++) {

//             console.log("trenutna pozivija i:");
//             console.log(i);

//             console.log("prolazim kroz listu prijatalja mog prijatelja id:");
//             console.log(fid);
//             console.log("ovo je id prijatelja od mog prijatelja na kome smo sad");

//             var current = friendsOfAfriend[j];
//             console.log(current.id);

//             console.log("pozicije:");
//             console.log(j);





//             console.log("provericemo dal se prijatelj mog prijatelja nalazi u mojim prijateljima");
//             console.log("moj id ponovo");
//             console.log(id);
//             if (current.id == id || friends.indexOf(current) != -1) {
//                 console.log("nalazi se idemo na sledeceg");
//                 continue;
//             }
//             console.log("ne nalazi se");
//             console.log("onda cemo prijatelje od priatelja da smestamo u mapu na nacin koji zavidi od uslova");

//             console.log("ako je vec u mapi dodacemo mu jos jedan poen na value");
//             if (friendsOfFriends.get(current.id) != undefined) {
//                 console.log("jeste dodajemo mu jedan poen");
//                 friendsOfFriends.set(current.id, friendsOfFriends.get(current.id) + 1);
//             }
//             else {
//                 console.log("nije stavicemo ga po prvi put na mapu");
//                 friendsOfFriends.set(current.id, 1);
//             }
//             console.log("proveravamo ostale prijatelje od prijatelja id:");
//             console.log(fid);
//         }
//         console.log("dosao sam do kraja provere prijatelja od prijatelja id:");
//         console.log(fid);
//         console.log("konacanpozicija i:");
//         console.log(i);
       
//         console.log("trenutna pozivija i:");
//         console.log(i);


//     }
//     console.log("ovo je mapa prijatelja od prijatelja");
//     console.log(friendsOfFriends);

//     for (var [key, value] of friendsOfFriends) {

//         if (value > 1) {

//             suggestedFriendsIds.push(key);
//         }
//     }
//    var sug = servicehelper.fromIdsToUsers(suggestedFriendsIds);
//     return friendsOfFriends;

// };
    
//     }
// module.exports = service;