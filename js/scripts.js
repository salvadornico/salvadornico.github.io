$(document).ready( function() {
	var contacts = document.getElementById("contacts")
	var contactsHeight = $(window).height() - $("footer").height()
	contacts.style.height = contactsHeight + "px"
	
	var anchor = document.querySelector("#contacts")
	var toggle = document.querySelector("#scrollDownBtn")
	var options = {
		speed: 1400,
		easing: "easeOutQuint",
		after: function (anchor, toggle) {
			$("#scrollToTopFAB").addClass("scale-in pulse")
			setTimeout( function(){
				$("#scrollToTopFAB").removeClass("scale-out scale-in")
			}, 500)
		}
	}
	$("#scrollDownBtn").click( function() {
		smoothScroll.animateScroll(anchor, toggle, options)
	})

	$("#scrollToTopFAB").click( function() {
		var anchor = document.querySelector("#banner")
		smoothScroll.animateScroll(anchor)
		$("#scrollToTopFAB").addClass("scale-out")
		$("#scrollToTopFAB").removeClass("pulse")
	})

	$('.parallax').parallax()
	
	var thingBox = document.getElementById('thingBox')
	for (i = 0; i < thingsList.length; ++i) {    
		thingBox.innerHTML += '<div class="thing col s6 m4 l3"><a href="' + 
			thingsList[i][0] + '"><div class="card small hoverable"><div class="card-image"><img src="images/things/' + 
			thingsList[i][1] + '" alt ="' + thingsList[i][2] + '"></div><div class="card-content valign-wrapper"><h5 class="black-text center-align">' + thingsList[i][2] + '</h5></div></div></a></div>'
	}
})

var thingsList = [
	["https://www.tested.com", "tested-logo.png", "Tested.com"],
	["http://www.garthstein.com/works/the-art-of-racing-in-the-rain", "racing_in_the_rain.jpg", "The Art of Racing in the Rain"],
	["https://www.pri.org/programs/world-words", "wiw.jpg", "The World In Words"],
	["http://wilderpeople.film", "wilderpeople.jpg", "Hunt For The Wilderpeople"],
	["https://www.theminimalists.com/etr", "etr.jpg", "Everything That Remains"],
	["http://www.switchedonpop.com", "switched-on-pop.png", "Switched On Pop"],
	["http://www.codemasters.com/game/dirt-4", "DiRT4.png", "DiRT 4"],
	["http://www.valo4life.com/", "Valo4life.jpg", "Valo 4 Life"]
]