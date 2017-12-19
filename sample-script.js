
	$(document).ready(function(){
		
		$(document).width();
		$("#sample1").hover(function() {
			$("#sample-header1").animate({right:"50%"}, 200);
			$("#sample1").animate({width:"75%"}, 200);
			$("#sample2").animate({width:"85%"}, 200);
			$("#sample3").animate({width:"95%"}, 200);
			$("#sample4").animate({width:"100%"}, 200);
		}, function() {
			$("#sample-header1").animate({right:"0"}, 200);
			$("#sample1").animate({width:"23%"}, 200);
			$("#sample2").animate({width:"48%"}, 200);
			$("#sample3").animate({width:"74%"}, 200);
			$("#sample4").animate({width:"100%"}, 200);
		});
		
		$("#sample2").hover(function() {
			$("#sample-header2").animate({right:"50%"}, 200);
			$("#sample1").animate({width:"10%"}, 200);
			$("#sample2").animate({width:"80%"}, 200);
			$("#sample3").animate({width:"90%"}, 200);
			$("#sample4").animate({width:"100%"}, 200);
		}, function() {
			$("#sample-header2").animate({right:"0"}, 200);
			$("#sample1").animate({width:"23%"}, 200);
			$("#sample2").animate({width:"48%"}, 200);
			$("#sample3").animate({width:"74%"}, 200);
			$("#sample4").animate({width:"100%"}, 200);
		});
		
		$("#sample3").hover(function() {
			$("#sample-header3").animate({right:"50%"}, 200);
			$("#sample1").animate({width:"10%"}, 200);
			$("#sample2").animate({width:"20%"}, 200);
			$("#sample3").animate({width:"90%"}, 200);
			$("#sample4").animate({width:"100%"}, 200);
		}, function() {
			$("#sample-header3").animate({right:"0"}, 200);
			$("#sample1").animate({width:"23%"}, 200);
			$("#sample2").animate({width:"48%"}, 200);
			$("#sample3").animate({width:"74%"}, 200);
			$("#sample4").animate({width:"100%"}, 200);
		});
		
		$("#sample4").hover(function() {
			$("#sample-header4").animate({right:"50%"}, 200);
			$("#sample1").animate({width:"10%"}, 200);
			$("#sample2").animate({width:"20%"}, 200);
			$("#sample3").animate({width:"30%"}, 200);
			$("#sample4").animate({width:"100%"}, 200);
		}, function() {
			$("#sample-header4").animate({right:"0"}, 200);
			$("#sample1").animate({width:"23%"}, 200);
			$("#sample2").animate({width:"48%"}, 200);
			$("#sample3").animate({width:"74%"}, 200);
			$("#sample4").animate({width:"100%"}, 200);
		});
		
	});