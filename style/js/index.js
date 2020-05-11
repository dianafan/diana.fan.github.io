$(document).ready(function() {

	$('#arrow').click(function() {
		// ref: stackoverflow
		$('.content').animate({
        scrollTop: $(".projects").offset().top - 150
    	}, 1000);
	});

});