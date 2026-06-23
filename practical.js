let size= 18;
let show= true;
function changeHeading() {
    document.getElementById("heading").innerText= document.getElementById("input").value;
}


function changeBackground() {
    document.body.style.backgroundColor= "lightblue";
}

function incfont() {
    size= size + 2;
    document.getElementById("para").style.fontSize= size + "px";
}

function togglepara() {
    show=!show
    document.getElementById("para").style.display= show? "block" : "none";
}

function reset() {
    location.reload()
}