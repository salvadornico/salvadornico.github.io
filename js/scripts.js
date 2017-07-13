$(document).ready( function() {

	var contacts = document.getElementById("contacts")
	var contactsHeight = $(window).height() - $("footer").height()
	contacts.style.height = contactsHeight + "px"
	
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
	
	var thingBox = document.getElementById("thingBox")
	for (i = 0; i < thingsList.length; ++i) {
		thingBox.innerHTML += '<div class="thing col s6 m4 l3"><a href="' + 
			thingsList[i][0] + '"><div class="card small hoverable"><div class="card-image"><img src="images/things/' + 
			thingsList[i][1] + '" alt ="' + thingsList[i][2] + '"></div><div class="card-content valign-wrapper"><h5 class="black-text center-align">' + thingsList[i][2] + '</h5></div></div></a></div>'
	}
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

var thingsList = [
	["https://www.tested.com", "tested-logo.png", "Tested.com"],
	["http://www.garthstein.com/works/the-art-of-racing-in-the-rain", "racing_in_the_rain.jpg", "The Art of Racing in the Rain"],
	["https://www.pri.org/programs/world-words", "wiw.jpg", "The World In Words"],
	["http://wilderpeople.film", "wilderpeople.jpg", "Hunt for the Wilderpeople"],
	["https://www.theminimalists.com/etr", "etr.jpg", "Everything That Remains"],
	["http://www.switchedonpop.com", "switched-on-pop.png", "Switched On Pop"],
	["http://www.codemasters.com/game/dirt-4", "DiRT4.png", "DiRT 4"],
	["http://www.valo4life.com/", "Valo4life.jpg", "Valo 4 Life"]
]