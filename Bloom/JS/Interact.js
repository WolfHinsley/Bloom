



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

const weapons = ["Weapon","Bow", "Sword", "Knife"];
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
    let x = document.forms["myForm"]["fname"].name.value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  function myFunction() {message='Well Done!';
  alert(message);
  document.forms["myForm"].mybutton.value;
    }

    function fun(){  
      document.getElementById("myForm").reset();  
    }  
   //Warning w3schools


   //For Loop
    
  