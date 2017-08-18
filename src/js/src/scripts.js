$(document).ready(() => {
	var scroll = new SmoothScroll("a[href*=\"#\"]")
	
	$("#scrollDownBtn").click(() => {
		popOutFAB()
	})
	
	$("#scrollToTopFAB").click(() => {
		$("#scrollToTopFAB").addClass("scale-out")
		$("#scrollToTopFAB").removeClass("pulse")
	})

	$(".parallax").parallax()

	var scrollFireOptions = [
		{selector: "#collapsible-1", offset: 250, callback: () => {
			$(".collapsible").collapsible("open", 0)
			$(".carousel.carousel-slider").carousel({
				fullWidth: true
			})
			startCarousel()
		}},
		{selector: "#collapsible-2", offset: 250, callback: () => {
			$(".collapsible").collapsible("open", 1)
			popOutFAB()
		}},
		{selector: "#collapsible-3", offset: 250, callback: () => {
			$(".collapsible").collapsible("open", 2)
		}},
		{selector: "#collapsible-4", offset: 250, callback: () => {
			$(".collapsible").collapsible("open", 3)
		}},
	]
	Materialize.scrollFire(scrollFireOptions)

	$(".carousel").mouseenter(() => {
		clearInterval(window.scrollAction)
	})

	$(".carousel").mouseleave(() => {
		startCarousel()
	})
	
})

function startCarousel() {
	window.scrollAction = setInterval(() => {
		$(".carousel").carousel("next")
	}, 3000)
}

function popOutFAB() {
	$("#scrollToTopFAB").addClass("scale-in pulse")
	setTimeout(() => {
		$("#scrollToTopFAB").removeClass("scale-out scale-in")
	}, 500)
	setTimeout(() => {
		$("#scrollToTopFAB").removeClass("pulse")
	}, 10000)
}
