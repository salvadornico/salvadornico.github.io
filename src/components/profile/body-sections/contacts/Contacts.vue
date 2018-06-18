<template lang="pug">
#contacts.section.container
	div
		.row
			h4.center-align.section-header My Work
			.center-align
				ContactBubble(url="https://github.com/salvadornico", icon="github", name="GitHub")
				ContactBubble(url="http://codepen.io/salvadornico", icon="codepen", name="CodePen")
				ContactBubble(url="https://vimeo.com/roller4life", icon="vimeo", name="Vimeo")

		.row
			h4.center-align Get In Touch
			.center-align
				ContactBubble(url="mailto:salvador.nico@gmail.com", icon="email", name="Email")
				ContactBubble(url="https://www.linkedin.com/in/salvadornico", icon="linkedin", name="LinkedIn")
				ContactBubble(url="https://plus.google.com/u/0/+NicoSalvador", icon="google", name="Google+")
				ContactBubble(url="https://www.instagram.com/nicolrnzo", icon="instagram", name="Instagram")
				ContactBubble(url="https://www.facebook.com/salvador.nico", icon="fb", name="Facebook")
				ContactBubble(url="https://twitter.com/nicoLorenzooo", icon="twitter", name="Twitter")
				ContactBubble(url="https://www.pinterest.com/roller4life/", icon="pinterest", name="Pinterest")

		.row
			a#resumeLink.waves-effect.waves-light.btn-large.red.darken-1.hoverable(href="../static/files/Nico Salvador CV.pdf")
				i.material-icons.left library_books
				span Resum&#233;
</template>

<script>
import ContactBubble from "./ContactBubble"

export default {
	components: {
		ContactBubble,
	},
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
