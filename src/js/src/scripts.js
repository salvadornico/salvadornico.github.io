$(document).ready( function() {
	
	var contactsAnchor = document.querySelector("#contacts")
	var contactsToggle = document.querySelector("#scrollDownBtn")
	var contactsSmoothScrollOptions = {
		speed: 1400,
		easing: "easeOutQuint",
		after: function (contactsAnchor, contactsToggle) { popOutFAB() }
	}
	$("#scrollDownBtn").click( function() {
		smoothScroll.animateScroll(contactsAnchor, contactsToggle, contactsSmoothScrollOptions)
	})

	var seeMoreAnchor = document.querySelector("#seeMore")
	var seeMoreToggle = document.querySelector("#things")
	var seeMoreSmoothScrollOptions = {
		speed: 1000,
		offset: -400,
		easing: "easeOutQuint"
	}
	$("#seeMore").click( function() {
		smoothScroll.animateScroll(seeMoreAnchor, seeMoreToggle, seeMoreSmoothScrollOptions)
	})

	$("#scrollToTopFAB").click( function() {
		var bannerAnchor = document.querySelector("#banner")
		smoothScroll.animateScroll(bannerAnchor)
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
		clearInterval(scrollAction)
	})

	$(".carousel").mouseleave(function() {
		startCarousel()
	})
	
})

function startCarousel() {
	scrollAction = setInterval(function(){
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