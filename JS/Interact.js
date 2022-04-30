function getOptions() {
    var x = document.getElementById("mySelect");
    var txt = "";
    var i;
    for (i = 0; i < x.length; i++) {
      txt = txt + " " + x.options[i].text;
    }
    document.getElementById("demo").innerHTML = txt;
  }
  //Input Based Code w3schools

  const weapons = ["Bow", "Sword", "Knife"];
document.getElementById("weapons").innerHTML = weapons; //Array

function getOptions() {
    var x = document.getElementById("useWeapon");
    var txt = "";
    var i;
    for (i = 0; i < x.length; i++) {
      txt = txt + " " + x.options[i].text;
    }
    document.getElementById("useWeapon").innerHTML = txt;}
     //Input Based Code w3schools