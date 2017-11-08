
$(document).ready(function(){
	
$('.header-head').delay(500).fadeIn(500);

$('#link1').hover(function() {
$('#link1').css({'text-decoration':'underline'});
}, function() { $('#link1').css({'text-decoration':'none'});
});

$('#link2').hover(function() {
$('#link2').css({'text-decoration':'underline'});
}, function() { $('#link2').css({'text-decoration':'none'});
});

$('#link3').hover(function() {
$('#link3').css({'text-decoration':'underline'});
}, function() { $('#link3').css({'text-decoration':'none'});
});

$('#link4').hover(function() {
$('#link4').css({'text-decoration':'underline'});
}, function() { $('#link4').css({'text-decoration':'none'});
});

$('#link5').hover(function() {
$('#link5').css({'text-decoration':'underline'});
}, function() { $('#link5').css({'text-decoration':'none'});
});

$('#link6').hover(function() {
$('#link6').css({'text-decoration':'underline'});
}, function() { $('#link6').css({'text-decoration':'none'});
});


$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 350) {
    $('#p1').fadeIn(300);
  } else {
    
  }
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1000) {
    $('#p2').fadeIn(300);
  } else {

  }
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1500) {
    $('#p3').fadeIn(300);
  } else {

  }
});


});