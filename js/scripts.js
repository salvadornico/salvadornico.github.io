$(document).ready( function() {
	var contacts = document.getElementById("contacts")
	var contactsHeight = ($(window).height() - $('footer').height())
	contacts.style.height = contactsHeight + "px"
	
	var anchor = document.querySelector("#contacts")
	var toggle = document.querySelector("#scrollDownBtn")
	var options = {
		speed: 1400,
		easing: 'easeOutQuint',
		after: function (anchor, toggle) {
			$("#scrollToTopFAB").addClass("scale-in")
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
	})

	$('.parallax').parallax()
	
	var thingBox = document.getElementById('thingBox')
	for (i = 0; i < thingsList.length; ++i) {    
		thingBox.innerHTML += '<div class="thing col s6 m4 l3"><a href="' + 
			thingsList[i][0] + '"><div class="card small hoverable"><div class="card-image"><img src="images/things/' + 
			thingsList[i][1] + '" alt ="' + thingsList[i][2] + '"></div><div class="card-content valign-wrapper center-align"><h5 class="black-text">' + thingsList[i][2] + '</h5></div></div></a></div>'
	}
})

var thingsList = [
	['https://www.tested.com', 'tested-logo.png', 'Tested.com'],
	['https://www.theminimalists.com/etr', 'etr.jpg', 'Everything That Remains'],
	['https://www.amazon.com/Art-Racing-Rain-Novel/dp/0061537969', 'racing_in_the_rain.jpg', 'The Art of Racing in the Rain'],
	['https://www.pri.org/programs/world-words', 'wiw.jpg', 'The World In Words'],
	['https://www.youtube.com/watch?v=aaX4dU4uMEY', 'Valo4life.jpg', 'Valo 4 Life'],
	['http://www.switchedonpop.com', 'switched-on-pop.png', 'Switched On Pop'],
	['https://www.youtube.com/watch?v=Jpdg5XOZZDY', 'cool-runnings.jpg', 'Cool Runnings'],
	['https://www.androidpolice.com', 'android-police.png', 'Android Police.com']
]