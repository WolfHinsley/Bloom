$(function() {
  $('.acc__title').click(function(j) {
    
    var dropDown = $(this).closest('.acc__card').find('.acc__panel');
    $(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();
    
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).closest('.acc').find('.acc__title.active').removeClass('active');
      $(this).addClass('active');
    }
    
    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });
}); //Siobhan on Codepin.io (JQuery Accordion)


var x = 5;
var y = 6;
var z = x + y;
document.getElementById("strength").innerHTML =
 z;

var x = 6;
var y = 6;
var z = x + y;
document.getElementById("intellect").innerHTML =
 z;

var x = 5;
var y = 5;
var z = x + y;
document.getElementById("charisma").innerHTML =
 z;

 var x = 8;
var y = 10;
var z = x + y;
document.getElementById("courage").innerHTML =
 z;

 var x = 12;
var y = 5;
var z = x + y;
document.getElementById("speed").innerHTML =
 z;
 //w3schools varable formula is used to calculate Rossa's Stats. 