function addtexto(){
    let text;
    let work = prompt("Ingrese una tarea");

    if (work == null || work == ""){
        text = "No ha puesto nada";
        document.getElementById("buttons1").style.display = "none";
        document.getElementById("buttons").style.display = "none";


    } else {
        text = work; 
        document.getElementById("buttons1").style.display = "block";
        document.getElementById("buttons").style.display = "block";
    }
    document.getElementById("addtext").style.backgroundColor = "orange";
    document.getElementById("addtext").style.border = "2px solid white";
    document.getElementById("addtext").style.borderRadius = "5px";
    document.getElementById("addtext").style.padding = "8px";
    document.getElementById("addtext").style.width = "265px";
    document.getElementById("addtext").style.marginLeft = "40px";
    document.getElementById("addtext").style.marginTop = "420px";
    document.getElementById("addtext").style.fontWeight = "bold";
    document.getElementById("addtext").style.fontSize = "15px";
    document.getElementById("addtext").style.position = "absolute";
    document.getElementById("addtext").style.transition = "0.5s";
    document.getElementById("addtext").innerHTML = text;
}

function HCinnovation(){
   document.getElementById('addtext').style.marginLeft = "520px"
   document.getElementById('buttons1').style.marginLeft = "580px"
   document.getElementById('buttons').style.marginLeft = "580px" 

   if (document.getElementById('addtext').style.marginLeft = "520px"){
    document.getElementById('buttons').style.visibility = "visible";
    document.getElementById('buttons1').style.visibility = "hidden";
} 
}

function donVito(){
    document.getElementById('addtext').style.marginLeft = "1005px"
    document.getElementById('buttons1').style.marginLeft = "1065px"
    document.getElementById('buttons').style.marginLeft = "1065px" 

    if (document.getElementById('addtext').style.marginLeft = "1005px"){
        document.getElementById('buttons').style.visibility = "hidden";
        document.getElementById('buttons1').style.visibility = "visible";
    } 
}

function farmaCenter(){
    document.getElementById('title0').style.marginLeft = "540px"
    document.getElementById('button0').style.marginLeft = "580px"
    document.getElementById('button00').style.marginLeft = "580px" 

    if (document.getElementById('title0').style.marginLeft = "540px"){
        document.getElementById('button0').style.visibility = "hidden";
        document.getElementById('button00').style.visibility = "visible";
    } 
}

function farmaCenter0(){
    document.getElementById('title0').style.marginLeft = "1020px"
    document.getElementById('button0').style.marginLeft = "1065px"
    document.getElementById('button00').style.marginLeft = "1065px" 

    if (document.getElementById('title0').style.marginLeft = "1020px"){
        document.getElementById('button0').style.visibility = "visible";
        document.getElementById('button00').style.visibility = "hidden";
    } 
}

function jahaWally(){
    document.getElementById('title01').style.marginLeft = "520px"
    document.getElementById('button01').style.marginLeft = "580px"
    document.getElementById('button02').style.marginLeft = "580px" 

    if (document.getElementById('title01').style.marginLeft = "520px"){
        document.getElementById('button01').style.visibility = "hidden";
        document.getElementById('button02').style.visibility = "visible";
    } 
}

function jahaWally0(){
    document.getElementById('title01').style.marginLeft = "1005px"
    document.getElementById('button01').style.marginLeft = "1065px"
    document.getElementById('button02').style.marginLeft = "1065px" 

    if (document.getElementById('title01').style.marginLeft = "1005px"){
        document.getElementById('button01').style.visibility = "visible";
        document.getElementById('button02').style.visibility = "hidden";
    } 
}


