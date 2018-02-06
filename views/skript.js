

function buttonPressed(btnId) {

    document.getElementById("btn1").className = "btn btn-primary";
    document.getElementById("btn2").className = "btn btn-primary";
    document.getElementById("btn3").className = "btn btn-primary";

    document.getElementById(btnId).className = "btn btn-primary active";
}

function showTable(arr) {

    var result = arr;

    if (result.length > 0) {
        document.getElementById("nsfm").style.display = "none";
        document.getElementById("tbl2").style.display = "table";

        var text = "";
        var i;
        for (i = 0; i < result.length; i++) {

            text += "<tr><td>" + result[i].id + "</td>" +
                "<td>" + result[i].firstName + "</td>" +
                "<td>" + result[i].surname + "</td>" +
                "<td>" + result[i].age + "</td>" +
                "<td>" + result[i].gender + "</td>" +
                "<td>" + result[i].friends.length + "</td>";

        }

        document.getElementById("tbo").innerHTML = text;
    } else {
        document.getElementById("tbl2").style.display = "none";
        document.getElementById("nsfm").style.display = "initial";
    }

}


function loadDoc(burl, btnid) {
    buttonPressed(btnid);

    var url = burl;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);

            showTable(myArr);

        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

