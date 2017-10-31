<template lang="pug">
header#app-banner.container
	.row
		.col.s12.l5
			.card.large.hoverable
				.card-image
					img(v-bind:src="portraitUrl" alt="That's me!")
				.card-content
					h1 Nico Salvador
					h3 Quezon City, Philippines
					.center-align
						a(v-for="link in links" v-bind:href="link.url")
							fa-icon(v-bind:icon="link.icon")

		.col.s12.m10.offset-m1.l7.sidebox
			.row
				.col.s12
					h2 Hi, I'm Nico.
					p.
						I'm into all sorts of things.#[br]Maybe we can work on something together?
					p.
						I've always had a hard time picking what it is I'm most into over the course of my life. There are just so many awesome things out there in the world to be involved in, why just choose one? I believe that incredible things can come out of the most unlikely partnerships.
					h3 Let's get in touch!
			.row.center-align
				.col.s12.m6.offset-m3.pull-l3
					a#scrollDownBtn.waves-effect.waves-light.btn-large.red.darken-1.hoverable(href="#contacts" target="_parent" data-scroll v-on:click="openFab()")
						material-icon.left(icon="chat_bubble")
						span Contact Me
			.row
				a#seeMore.hvr-icon-hang.white-text(href="#things" target="_parent" data-scroll)
</template>

<script>
import FAIcon from "./shared/FAIcon"
import MaterialIcon from "./shared/MaterialIcon"
import _ from "lodash"

export default {
	name: "app-banner",
	components: {
		"fa-icon": FAIcon,
		"material-icon": MaterialIcon
	},
	data() {
		return {
			links: [
				{
					url: "mailto:salvador.nico@gmail.com",
					icon: "envelope"
				},
				{
					url: "https://github.com/salvadornico",
					icon: "github"
				},
				{
					url: "https://www.linkedin.com/in/salvadornico",
					icon: "linkedin"
				},
				{
					url: "https://www.facebook.com/salvador.nico",
					icon: "facebook-official"
				}
			]
		}
	},
	computed: {
		portraitUrl: function() {
			return `${this.$cloudinaryLink}/portrait.png`
		}
	},
	methods: {
		openFab: function() {
			this.$eventBus.$emit("openFab")
		}
	}
}
</script>

<style lang="stylus">
@require "../assets/_base"

#app-banner
	min-height 100vh

	@media TabletUp
		padding-top 10vh

		& > div
			center Y absolute

		.card
			@media TabletDown
				max-width 60%
				margin 0 auto

	.card-content
		height 100%

		& > *
			font-family "Montserrat", sans-serif
			display block
			color black

		h1
			margin-top 0.3rem
			font-size 2rem

		h3
			font-size 1.6rem

		div
			position absolute
			bottom 0
			margin-bottom 3%

		a
			display inline-block
			margin auto 0.4rem 0.4rem

		i
			color black
			font-size 1.7rem

.sidebox
	color white

	a
		display block
		min-width 10rem

#seeMore
	font-size 1.25rem
	text-align center
	width 1rem
	center X absolute

	@media MobileOnly
		margin-top -1rem
</style>

