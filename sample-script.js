
	$(document).ready(function(){
		
		$(document).width();
		$("#sample1").hover(function() {
			$("#sample-header1").animate({right:"50%"}, { duration: 300, queue: false });
			$("#sample1").animate({width:"75%"}, { duration: 300, queue: false });
			$("#sample2").animate({width:"85%"}, { duration: 300, queue: false });
			$("#sample3").animate({width:"95%"}, { duration: 300, queue: false });
			$("#sample4").animate({width:"100%"}, { duration: 300, queue: false });
			$("#sample-text1").animate({display:"inline"}, 300);
		}, function() {
			$("#sample-header1").animate({right:"0"}, { duration: 300, queue: false });
			$("#sample1").animate({width:"24%"}, { duration: 300, queue: false });
			$("#sample2").animate({width:"48%"}, { duration: 300, queue: false });
			$("#sample3").animate({width:"74%"}, { duration: 300, queue: false });
			$("#sample4").animate({width:"100%"}, { duration: 300, queue: false });
			$("#sample-text1").animate({display:"none"}, 300);
		});
		
		$("#sample2").hover(function() {
			$("#sample-header2").animate({right:"50%"}, { duration: 300, queue: false });
			$("#sample1").animate({width:"10%"}, { duration: 300, queue: false });
			$("#sample2").animate({width:"80%"}, { duration: 300, queue: false });
			$("#sample3").animate({width:"90%"}, { duration: 300, queue: false });
			$("#sample4").animate({width:"100%"}, { duration: 300, queue: false });
			$("#sample-text2").animate({display:"inline"}, 300);
		}, function() {
			$("#sample-header2").animate({right:"0"}, { duration: 300, queue: false });
			$("#sample1").animate({width:"24%"}, { duration: 300, queue: false });
			$("#sample2").animate({width:"48%"}, { duration: 300, queue: false });
			$("#sample3").animate({width:"74%"}, { duration: 300, queue: false });
			$("#sample4").animate({width:"100%"}, { duration: 300, queue: false });
			$("#sample-text2").animate({display:"none"}, 300);
		});
		
		$("#sample3").hover(function() {
			$("#sample-header3").animate({right:"50%"}, { duration: 300, queue: false });
			$("#sample1").animate({width:"10%"}, { duration: 300, queue: false });
			$("#sample2").animate({width:"20%"}, { duration: 300, queue: false });
			$("#sample3").animate({width:"90%"}, { duration: 300, queue: false });
			$("#sample4").animate({width:"100%"}, { duration: 300, queue: false });
			$("#sample-text3").animate({display:"inline"}, 300);
		}, function() {
			$("#sample-header3").animate({right:"0"}, { duration: 300, queue: false });
			$("#sample1").animate({width:"24%"}, { duration: 300, queue: false });
			$("#sample2").animate({width:"48%"}, { duration: 300, queue: false });
			$("#sample3").animate({width:"74%"}, { duration: 300, queue: false });
			$("#sample4").animate({width:"100%"}, { duration: 300, queue: false });
			$("#sample-text3").animate({display:"none"}, 300);
		});
		
		$("#sample4").hover(function() {
			$("#sample-header4").animate({right:"50%"}, { duration: 300, queue: false });
			$("#sample1").animate({width:"10%"}, { duration: 300, queue: false });
			$("#sample2").animate({width:"20%"}, { duration: 300, queue: false });
			$("#sample3").animate({width:"30%"}, { duration: 300, queue: false });
			$("#sample4").animate({width:"100%"}, { duration: 300, queue: false });
			$("#sample-text4").animate({display:"inline"}, 300);
		}, function() {
			$("#sample-header4").animate({right:"0"}, { duration: 300, queue: false });
			$("#sample1").animate({width:"24%"}, { duration: 300, queue: false });
			$("#sample2").animate({width:"48%"}, { duration: 300, queue: false });
			$("#sample3").animate({width:"74%"}, { duration: 300, queue: false });
			$("#sample4").animate({width:"100%"}, { duration: 300, queue: false });
			$("#sample-text4").animate({display:"none"}, 300);
		});
		
	});