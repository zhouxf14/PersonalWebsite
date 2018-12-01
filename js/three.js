$(document).ready(function() {
	$(window).resize(function(){
		location.reload()
	});
	
	var guideline_height = $(window).height() - $("nav").height();
  	$("#guideline").height(guideline_height);
});