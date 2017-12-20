
	$(document).ready(function(){
		
		$(document).width();
		$("#sample1").hover(function() {
			$("#sample-header1").animate({right:"50%"}, { duration: 300, queue: false });
			$("#sample1").animate({width:"75%"}, { duration: 300, queue: false });
			$("#sample2").animate({width:"85%"}, { duration: 300, queue: false });
			$("#sample3").animate({width:"95%"}, { duration: 300, queue: false });
			$("#sample4").animate({width:"100%"}, { duration: 300, queue: false });
		}, function() {
			$("#sample-header1").animate({right:"0"}, { duration: 300, queue: false });
			$("#sample1").animate({width:"23%"}, { duration: 300, queue: false });
			$("#sample2").animate({width:"48%"}, { duration: 300, queue: false });
			$("#sample3").animate({width:"74%"}, { duration: 300, queue: false });
			$("#sample4").animate({width:"100%"}, { duration: 300, queue: false });
		});
		
		$("#sample2").hover(function() {
			$("#sample-header2").animate({right:"50%"}, { duration: 300, queue: false });
			$("#sample1").animate({width:"10%"}, { duration: 300, queue: false });
			$("#sample2").animate({width:"80%"}, { duration: 300, queue: false });
			$("#sample3").animate({width:"90%"}, { duration: 300, queue: false });
			$("#sample4").animate({width:"100%"}, { duration: 300, queue: false });
		}, function() {
			$("#sample-header2").animate({right:"0"}, { duration: 300, queue: false });
			$("#sample1").animate({width:"23%"}, { duration: 300, queue: false });
			$("#sample2").animate({width:"48%"}, { duration: 300, queue: false });
			$("#sample3").animate({width:"74%"}, { duration: 300, queue: false });
			$("#sample4").animate({width:"100%"}, { duration: 300, queue: false });
		});
		
		$("#sample3").hover(function() {
			$("#sample-header3").animate({right:"50%"}, { duration: 300, queue: false });
			$("#sample1").animate({width:"10%"}, { duration: 300, queue: false });
			$("#sample2").animate({width:"20%"}, { duration: 300, queue: false });
			$("#sample3").animate({width:"90%"}, { duration: 300, queue: false });
			$("#sample4").animate({width:"100%"}, { duration: 300, queue: false });
		}, function() {
			$("#sample-header3").animate({right:"0"}, { duration: 300, queue: false });
			$("#sample1").animate({width:"23%"}, { duration: 300, queue: false });
			$("#sample2").animate({width:"48%"}, { duration: 300, queue: false });
			$("#sample3").animate({width:"74%"}, { duration: 300, queue: false });
			$("#sample4").animate({width:"100%"}, { duration: 300, queue: false });
		});
		
		$("#sample4").hover(function() {
			$("#sample-header4").animate({right:"50%"}, { duration: 300, queue: false });
			$("#sample1").animate({width:"10%"}, { duration: 300, queue: false });
			$("#sample2").animate({width:"20%"}, { duration: 300, queue: false });
			$("#sample3").animate({width:"30%"}, { duration: 300, queue: false });
			$("#sample4").animate({width:"100%"}, { duration: 300, queue: false });
		}, function() {
			$("#sample-header4").animate({right:"0"}, { duration: 300, queue: false });
			$("#sample1").animate({width:"23%"}, { duration: 300, queue: false });
			$("#sample2").animate({width:"48%"}, { duration: 300, queue: false });
			$("#sample3").animate({width:"74%"}, { duration: 300, queue: false });
			$("#sample4").animate({width:"100%"}, { duration: 300, queue: false });
		});
		
	});