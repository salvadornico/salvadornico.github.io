<template lang="pug">
#contacts.section.container
	div
		.row
			h4.center-align.section-header My Work
			.center-align
				contact-bubble(url="https://github.com/salvadornico", icon="github", name="GitHub")
				contact-bubble(url="http://codepen.io/salvadornico", icon="codepen", name="CodePen")
				contact-bubble(url="https://vimeo.com/roller4life", icon="vimeo", name="Vimeo")

		.row
			h4.center-align Get In Touch
			.center-align
				contact-bubble(url="mailto:salvador.nico@gmail.com", icon="email", name="Email")
				contact-bubble(url="https://www.linkedin.com/in/salvadornico", icon="linkedin", name="LinkedIn")
				contact-bubble(url="https://plus.google.com/u/0/+NicoSalvador", icon="google", name="Google+")
				contact-bubble(url="https://www.instagram.com/nicolrnzo", icon="instagram", name="Instagram")
				contact-bubble(url="https://www.facebook.com/salvador.nico", icon="fb", name="Facebook")
				contact-bubble(url="https://twitter.com/nicoLorenzooo", icon="twitter", name="Twitter")
				contact-bubble(url="https://www.pinterest.com/roller4life/", icon="pinterest", name="Pinterest")

		.row
			a#resumeLink.waves-effect.waves-light.btn-large.red.darken-1.hoverable(href="../static/files/Nico_Salvador-CV2017.pdf")
				i.material-icons.left library_books
				span Resum&#233;
</template>

<script>
import ContactBubble from "./ContactBubble"

export default {
	name: "body-contacts",
	components: {
		"contact-bubble": ContactBubble
	}
}
</script>

<style lang="stylus" scoped>
#contacts
	height 100vh
	min-height 40rem
	color white

	& > div
		width 100%
		center Y absolute

#resumeLink
	margin 2rem auto
	center X relative
	width 12rem
</style>


