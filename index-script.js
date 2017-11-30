
$(document).ready(function(){
	
$('.header-head').delay(700).fadeIn(500);


$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 450) {
    $("#p1").animate({
    opacity: "1"
    });
  } else {
    
  }
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1050) {
    $("#p2").animate({
    opacity: "1"
    });
  } else {
    
  }
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 850) {
    $("#p3").animate({
    opacity: "1"
    });
  } else {
    
  }
});

$('#logo').hover(function() {
$('#logo').css({'text-decoration':'underline'});
}, function() { $('#logo').css({'text-decoration':'none'});
});

$("#menu").click(function(){
$("#slide-bar").animate({width:"100%"});
$("#menu2").delay(100).fadeIn(100);
});

$("#closebtn").click(function() {
$("#slide-bar").animate({width:"0"});
$("#menu2").fadeOut(100);
});

});