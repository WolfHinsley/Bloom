



//Name Feild

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


//Check Boxes

function getOptions() {
  var x = document.getElementById("useWeapon");
  var txt = "";
  var i;
  for (i = 0; i < x.length; i++) {
    txt = txt + " " + x.options[i].text;
  }
  document.getElementById("useWeapon").innerHTML = txt;}
   //Input Based Code w3schools

   //Sumbit
    

   //Reset

   function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
   //Warning w3schools


   //For Loop
    
  