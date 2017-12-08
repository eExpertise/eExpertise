
$(document).ready(function(){
$("#header-opt").width();
$('.header-head').delay(400).fadeIn(500);


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
  if (y > 780) {
    $("#p2").animate({
    opacity: "1"
    });
  } else {
    
  }
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1370) {
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
$("#menu2").delay(280).fadeIn(150);
});

$("#closebtn").click(function() {
$("#slide-bar").animate({width:"0"});
$("#menu2").fadeOut(150);
});

$("#arrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#arr-scroll").offset().top
    }, 1200);
});

$("#header-opt").click(function() {
event.preventDefault();
$(this).animate({backgroundColor:"white", color:"black"}, 200, function() {window.location = "opt"; });
});

$("#header-opt").hover(function() {
if ($(document).width() <= 600) {

} else {
$(this).animate({backgroundColor:"white", color:"black"}, 300);
}
}, function() {
if ($(document).width() <= 600) {
	
} else {
$(this).animate({backgroundColor:"rgba(0, 0, 0, 0)", color:"white"}, 300);
}
});
});