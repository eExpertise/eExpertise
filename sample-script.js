
$(document).ready(function(){
	$(document).width();

	$(".option1").mouseenter(function() {
	$(".option2, .option3, .option4").css({"text-decoration":"none"});
	$(this).css({"text-decoration":"underline"});
	$("#info2, #info3, #info4").fadeOut(20);
	$("#info1").delay(50).fadeIn(200);
	
	if ($(document).width() <= 420) {
	$("#option-container3, #option-container2, #option-container4").animate({marginBottom:"22px"}, "4000");
	$("#option-container1").animate({marginBottom:"820px"}, "2000");	
	} else if ($(document).width() <= 620) {	
	$("#option-container3, #option-container2, #option-container4").animate({marginBottom:"22px"}, "4000");
	$("#option-container1").animate({marginBottom:"520px"}, "2000");
	} else if ($(document).width() <= 920) {
	$("#option-container3, #option-container4").animate({marginBottom:"22px"}, "4000");
	$("#option-container1").animate({marginBottom:"400px"}, "2000");
	} else if ($(document).width() <= 1200) {
	$("#option-container4").animate({marginBottom:"22px"}, "4000");
	$("#option-container1").animate({marginBottom:"400px"}, "2000");
	} else {
	}
	});
	
	$(".option2").mouseenter(function() {
	$(".option1, .option3, .option4").css({"text-decoration":"none"});
	$(this).css({"text-decoration":"underline"});
	$("#info1, #info3, #info4").fadeOut(20);
	$("#info2").delay(50).fadeIn(200);
	
	if ($(document).width() <= 420) {
	$("#option-container3, #option-container4, #option-container1").animate({marginBottom:"22px"}, "4000");
	$("#option-container2").animate({marginBottom:"720px"}, "2000");	
	} else if ($(document).width() <= 620) {	
	$("#option-container3, #option-container4, #option-container1").animate({marginBottom:"22px"}, "4000");
	$("#option-container2").animate({marginBottom:"420px"}, "2000");
	} else if ($(document).width() <= 920) {
	$("#option-container3, #option-container4").animate({marginBottom:"22px"}, "4000");
	$("#option-container2").animate({marginBottom:"400px"}, "2000");
	} else if ($(document).width() <= 1200) {
	$("#option-container4").animate({marginBottom:"22px"}, "4000");
	$("#option-container2").animate({marginBottom:"400px"}, "2000");
	} else {
	}
	});
	
	$(".option3").mouseenter(function() {
	$(".option1, .option2, .option4").css({"text-decoration":"none"});
	$(this).css({"text-decoration":"underline"});
	$("#info1, #info2, #info4").fadeOut(20);
	$("#info3").delay(50).fadeIn(200);
	
	if ($(document).width() <= 420) {
	$("#option-container4, #option-container2, #option-container1").animate({marginBottom:"22px"}, "4000");
	$("#option-container3").animate({marginBottom:"920px"}, "2000");	
	} else if ($(document).width() <= 620) {	
	$("#option-container4, #option-container2, #option-container1").animate({marginBottom:"22px"}, "4000");
	$("#option-container3").animate({marginBottom:"500px"}, "2000");
	} else if ($(document).width() <= 920) {
	$("#option-container1, #option-container2").animate({marginBottom:"22px"}, "4000");
	$("#option-container3").animate({marginBottom:"400px"}, "2000");
	} else if ($(document).width() <= 1200) {
	$("#option-container4").animate({marginBottom:"22px"}, "4000");
	$("#option-container3").animate({marginBottom:"400px"}, "2000");
	} else {
	}
	});
	
	$(".option4").mouseenter(function() {
	$(".option1, .option2, .option3").css({"text-decoration":"none"});
	$(this).css({"text-decoration":"underline"});
	$("#info1, #info2, #info3").fadeOut(200);
	$("#info4").delay(50).fadeIn(200);
	
	if ($(document).width() <= 420) {
	$("#option-container3, #option-container2, #option-container1").animate({marginBottom:"22px"}, "4000");
	$("#option-container4").animate({marginBottom:"800px"}, "2000");	
	} else if ($(document).width() <= 620) {	
	$("#option-container3, #option-container2, #option-container1").animate({marginBottom:"22px"}, "4000");
	$("#option-container4").animate({marginBottom:"520px"}, "2000");
	} else if ($(document).width() <= 920) {
	$("#option-container1, #option-container2").animate({marginBottom:"22px"}, "4000");
	$("#option-container4").animate({marginBottom:"400px"}, "2000");
	} else if ($(document).width() <= 1200) {
	$("#option-container3, #option-container2, #option-container1").animate({marginBottom:"22px"}, "4000");
	$("#option-container4").animate({marginBottom:"22px"}, "2000");
	} else {
	}
	});
});