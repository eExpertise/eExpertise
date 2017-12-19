
	$(document).ready(function(){
		
		$(document).scroll(function() { 
	   if($(window).scrollTop() === 0) {
		 $("#bar").animate({backgroundColor:"transparent"}, 300);
	   } else {
	   $("#bar").animate({backgroundColor:"rgb(68, 157, 245)"}, 300);
	   }
	});
	Cookies.get("options");
	Cookies.get("options2");
	if (Cookies.get('options') == '1000' && Cookies.get('options2') == '1000') {
		alert("1000, 1000");
	} else if (Cookies.get('options') == '1100' && Cookies.get('options2') == '1000') {
		alert("1100, 1000");
	} else if (Cookies.get('options') == '1010' && Cookies.get('options2') == '1000') {
		alert("1010, 1000");
	} else if (Cookies.get('options') == '1001' && Cookies.get('options2') == '1000') {
		alert("1001, 1000");
	} else if (Cookies.get('options') == '1110' && Cookies.get('options2') == '1000') {
		alert("1110, 1000");
	} else if (Cookies.get('options') == '1101' && Cookies.get('options2') == '1000') {
		alert("1101, 1000");
	} else if (Cookies.get('options') == '1011' && Cookies.get('options2') == '1000') {
		alert("1011, 1000");
	} else if (Cookies.get('options') == '0100' && Cookies.get('options2') == '1000') {
		alert("0100, 1000");
	} else if (Cookies.get('options') == '0110' && Cookies.get('options2') == '1000') {
		alert("0110, 1000");
	} else if (Cookies.get('options') == '0101' && Cookies.get('options2') == '1000') {
		alert("0101, 1000");
	} else if (Cookies.get('options') == '0111' && Cookies.get('options2') == '1000') {
		alert("0111, 1000");
	} else if (Cookies.get('options') == '0010' && Cookies.get('options2') == '1000') {
		alert("0010, 1000");
	} else if (Cookies.get('options') == '0011' && Cookies.get('options2') == '1000') {
		alert("0011, 1000");
	} else if (Cookies.get('options') == '0001' && Cookies.get('options2') == '1000') {
		alert("0001, 1000");
	} else if (Cookies.get('options') == '1111' && Cookies.get('options2') == '1000') {
		alert("1111, 1000");
	} else if (Cookies.get('options') == '1000' && Cookies.get('options2') == '0100') {
		alert("1000, 0100");
	} else if (Cookies.get('options') == '1100' && Cookies.get('options2') == '0100') {
		alert("1100, 0100");
	} else if (Cookies.get('options') == '1010' && Cookies.get('options2') == '0100') {
		alert("1010, 0100");
	} else if (Cookies.get('options') == '1001' && Cookies.get('options2') == '0100') {
		alert("1001, 0100");
	} else if (Cookies.get('options') == '1110' && Cookies.get('options2') == '0100') {
		alert("1110, 0100");
	} else if (Cookies.get('options') == '1101' && Cookies.get('options2') == '0100') {
		alert("1101, 0100");
	} else if (Cookies.get('options') == '1011' && Cookies.get('options2') == '0100') {
		alert("1011, 0100");
	} else if (Cookies.get('options') == '0100' && Cookies.get('options2') == '0100') {
		alert("0100, 0100");
	} else if (Cookies.get('options') == '0110' && Cookies.get('options2') == '0100') {
		alert("0110, 0100");
	} else if (Cookies.get('options') == '0101' && Cookies.get('options2') == '0100') {
		alert("0101, 0100");
	} else if (Cookies.get('options') == '0111' && Cookies.get('options2') == '0100') {
		alert("0111, 0100");
	} else if (Cookies.get('options') == '0010' && Cookies.get('options2') == '0100') {
		alert("0010, 0100");
	} else if (Cookies.get('options') == '0011' && Cookies.get('options2') == '0100') {
		alert("0011, 0100");
	} else if (Cookies.get('options') == '0001' && Cookies.get('options2') == '0100') {
		alert("0001, 0100");
	} else if (Cookies.get('options') == '1111' && Cookies.get('options2') == '0100') {
		alert("1111, 0100");
	} else if (Cookies.get('options') == '1100' && Cookies.get('options2') == '0010') {
		alert("1100, 0010");
	} else if (Cookies.get('options') == '1010' && Cookies.get('options2') == '0010') {
		alert("1010, 0010");
	} else if (Cookies.get('options') == '1000' && Cookies.get('options2') == '0010') {
		alert("1001, 0010");
	} else if (Cookies.get('options') == '1110' && Cookies.get('options2') == '0010') {
		alert("1110, 0010");
	} else if (Cookies.get('options') == '1101' && Cookies.get('options2') == '0010') {
		alert("1101, 0010");
	} else if (Cookies.get('options') == '1011' && Cookies.get('options2') == '0010') {
		alert("1011, 0010");
	} else if (Cookies.get('options') == '0100' && Cookies.get('options2') == '0010') {
		alert("0100, 0010");
	} else if (Cookies.get('options') == '0110' && Cookies.get('options2') == '0010') {
		alert("0110, 0010");
	} else if (Cookies.get('options') == '0101' && Cookies.get('options2') == '0010') {
		alert("0101, 0010");
	} else if (Cookies.get('options') == '0111' && Cookies.get('options2') == '0010') {
		alert("0111, 0010");
	} else if (Cookies.get('options') == '0010' && Cookies.get('options2') == '0010') {
		alert("0010, 0010");
	} else if (Cookies.get('options') == '0011' && Cookies.get('options2') == '0010') {
		alert("0011, 0010");
	} else if (Cookies.get('options') == '0001' && Cookies.get('options2') == '0010') {
		alert("0001, 0010");
	} else if (Cookies.get('options') == '1111' && Cookies.get('options2') == '0010') {
		alert("1111, 0010");
	} else if (Cookies.get('options') == '1000' && Cookies.get('options2') == '0010') {
		alert("1000, 0010");
	} else if (Cookies.get('options') == '1100' && Cookies.get('options2') == '0001') {
		alert("1100, 0001");
	} else if (Cookies.get('options') == '1010' && Cookies.get('options2') == '0001') {
		alert("1010, 0001");
	} else if (Cookies.get('options') == '1001' && Cookies.get('options2') == '0001') {
		alert("1001, 0001");
	} else if (Cookies.get('options') == '1110' && Cookies.get('options2') == '0001') {
		alert("1110, 0001");
	} else if (Cookies.get('options') == '1101' && Cookies.get('options2') == '0001') {
		alert("1101, 0001");
	} else if (Cookies.get('options') == '1011' && Cookies.get('options2') == '0001') {
		alert("1011, 0001");
	} else if (Cookies.get('options') == '0100' && Cookies.get('options2') == '0001') {
		alert("0100, 0001");
	} else if (Cookies.get('options') == '0110' && Cookies.get('options2') == '0001') {
		alert("0110, 0001");
	} else if (Cookies.get('options') == '0101' && Cookies.get('options2') == '0001') {
		alert("0101, 0001");
	} else if (Cookies.get('options') == '0111' && Cookies.get('options2') == '0001') {
		alert("0111, 0001");
	} else if (Cookies.get('options') == '0010' && Cookies.get('options2') == '0001') {
		alert("0010, 0001");
	} else if (Cookies.get('options') == '0011' && Cookies.get('options2') == '0001') {
		alert("0011, 0001");
	} else if (Cookies.get('options') == '0001' && Cookies.get('options2') == '0001') {
		alert("0001, 0001");
	} else if (Cookies.get('options') == '1111' && Cookies.get('options2') == '0001') {
		alert("1111, 0001");
	} else if (Cookies.get('options') == '1000' && Cookies.get('options2') == '0001') {
		alert("1000, 0001");
	} else {
	alert('ERROR: not all required options were selected, please go back and finish your personalization.')
	}
	$('#header-head').delay(400).fadeIn(500);

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

	});