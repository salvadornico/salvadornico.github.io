$(document).ready( function() {

	var contactsAnchor = document.querySelector("#contacts")
	var toggle = document.querySelector("#scrollDownBtn")
	var smoothScrollOptions = {
		speed: 1400,
		easing: "easeOutQuint",
		after: function (contactsAnchor, toggle) { popOutFAB() }
	}
	$("#scrollDownBtn").click( function() {
		smoothScroll.animateScroll(contactsAnchor, toggle, smoothScrollOptions)
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
	
})

function popOutFAB() {
	$("#scrollToTopFAB").addClass("scale-in pulse")
	setTimeout( function() {
		$("#scrollToTopFAB").removeClass("scale-out scale-in")
	}, 500)
	setTimeout( function() {
		$("#scrollToTopFAB").removeClass("pulse")
	}, 10000)
}