$(document).ready(function() {
	
	$(".emailus").click(function() {
		$("#modal-container").show();
	});

	$("#submitButton").click(function() {
		$("#modal-container").hide();
	}); 

	$('a').click(function() {
		$("html, body").animate({
		scrollTop: $( $.attr(this, "href")).offset().top	
		}, 1000);
		return false;
	});	
});	