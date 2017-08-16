$(document).ready( function() {
	var scroll = new SmoothScroll('a[href*="#"]')
	
	$("#scrollDownBtn").click( function() {
		popOutFAB()
	})
	
	$("#scrollToTopFAB").click( function() {
		$("#scrollToTopFAB").addClass("scale-out")
		$("#scrollToTopFAB").removeClass("pulse")
	})

	$(".parallax").parallax()

	var scrollFireOptions = [
		{selector: "#collapsible-1", offset: 250, callback: function() {
			$(".collapsible").collapsible("open", 0)
			$(".carousel.carousel-slider").carousel({fullWidth: true})
			startCarousel()
		}},
		{selector: "#collapsible-2", offset: 250, callback: function() {
			$(".collapsible").collapsible("open", 1)
			popOutFAB()
		}},
		{selector: "#collapsible-3", offset: 250, callback: function() {
			$(".collapsible").collapsible("open", 2)
		}},
		{selector: "#collapsible-4", offset: 250, callback: function() {
			$(".collapsible").collapsible("open", 3)
		}},
	]
	Materialize.scrollFire(scrollFireOptions)

	$(".carousel").mouseenter(function() {
		clearInterval(window.scrollAction)
	})

	$(".carousel").mouseleave(function() {
		startCarousel()
	})
	
})

function startCarousel() {
	window.scrollAction = setInterval(function(){
		$(".carousel").carousel("next")
	}, 3000)
}

function popOutFAB() {
	$("#scrollToTopFAB").addClass("scale-in pulse")
	setTimeout( function() {
		$("#scrollToTopFAB").removeClass("scale-out scale-in")
	}, 500)
	setTimeout( function() {
		$("#scrollToTopFAB").removeClass("pulse")
	}, 10000)
}