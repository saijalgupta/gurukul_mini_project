function sidemenu(side) {
    var menu = document.getElementById("sidemenu");
    if (side == 0) {
        menu.style = "transform: translateX(0vh); position:fixed;";
    } else {
        menu.style = "transform: translateX(-100%);";
    }
    side++;
}

function quizt(frame) {
    document.getElementById("f1").style = "display: none;";
    document.getElementById("f2").style = "display: none;";
    document.getElementById("f3").style = "display: none;";
    document.getElementById("f4").style = "display: none;";
    document.getElementById("f5").style = "display: none;";
    document.getElementById("f6").style = "display: none;";
    document.getElementById("f7").style = "display: none;";
    document.getElementById("f8").style = "display: none;";
    document.getElementById("f9").style = "display: none;";
    document.getElementById("f10").style = "display: none;";
    document.getElementById("f11").style = "display: none;";
    if (frame == 1) document.getElementById("f1").style = "display: block";
    else if (frame == 2) document.getElementById("f2").style = "display: block";
    else if (frame == 3) document.getElementById("f3").style = "display: block";
    else if (frame == 4) document.getElementById("f4").style = "display: block";
    else if (frame == 5) document.getElementById("f5").style = "display: block";
    else if (frame == 6) document.getElementById("f6").style = "display: block";
    else if (frame == 7) document.getElementById("f7").style = "display: block";
    else if (frame == 8) document.getElementById("f8").style = "display: block";
    else if (frame == 9) document.getElementById("f9").style = "display: block";
    else if (frame == 10)
        document.getElementById("f10").style = "display: block";
    else if (frame == 11)
        document.getElementById("f11").style = "display: block";
    else alert("error");
}

function startquiz() {
    document.getElementById("title").style = "display: none;";

    document.getElementById("panel").style = "display: inline-flex;";
    document.getElementById("left").style = "display: block;";
    document.getElementById("right").style = "display: block;";
}
