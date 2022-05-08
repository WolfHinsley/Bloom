
let text;
switch (new Date().getDay()) {
  case 6:
    text = "Relax, for it is Saturday";
    break;

 case 5:
    text = "Tis the Best Day, a Wonderous Friday!";
    break;

 case 4:
    text = "Cheers! We have Reached Thursday!";
    break;

 case 3:
    text = "Tis Wednesday, Merry Fellow!";
    break;

 case 2:
    text = "Tuedays are the Happiest of Days!";
    break;

 case 1:
    text = "Merry Monday to All!";
    break;
 case 0:
    text = "Tis Sunday, Sunday, Sunday!";
    break;
  
 default:
    text = "Tis a Marvelous Day Indeed!";
}
document.getElementById("today").innerHTML = text; //switch statements. 
