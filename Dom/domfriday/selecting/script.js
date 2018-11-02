function selectSecond(styleclass) {
    // document.getElementById("second").className = style;
    document.querySelector("#second").className = styleclass;
}

selectSecond("bg-color");

function selectAllLi(styleclass) {
    //var li = document.getElementsByTagName("li");
    var li = document.querySelectorAll("li");
    for (var i = 0; i < li.length; i++) {
        li[i].className = styleclass;
    }
}

selectAllLi("bg-color2");

function selectLastUl(styleclass) {
    var li = document.querySelectorAll("ul:nth-child(3) li");
    for (var i = 0; i < li.length; i++) {
        li[i].className = styleclass;
    }
}

selectLastUl("bg-color3");