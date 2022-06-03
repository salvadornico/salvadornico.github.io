<template lang="pug">
#things
	h3.center-align.section-header Things That Inspire Me
	#inspirations.row.page-section
		.inspiration.card-panel.red.lighten-1.flow-text.valign-wrapper(v-for="inspiration in inspirations")
				span.white-text {{ inspiration.text }}

	h3.center-align.section-header Things I'm Enjoying Lately
	#thingBox.row.page-section
		div(v-for="thing in things")
			Thing(:name="thing.name" :image="thing.image" :link="thing.link")
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"
import Thing from "./things/Thing.vue"

@Component({
	components: {
		Thing,
	},
})
export default class OtherThings extends Vue {
	inspirations = [
		{ text: "Stories behind great ideas" },
		{ text: "Working with people who love their craft" },
		{ text: "Elegant solutions to awkward problems" },
	]

	things = [
		{
			image: "dr2.jpg",
			link: "https://dirtrally2.dirtgame.com/",
			name: "Dirt Rally 2.0",
		},
		{
			image: "acc.jpg",
			link: "https://acc.505games.com/",
			name: "Assetto Corsa Competizione",
		},
		{
			image: "tested-logo.png",
			link: "https://www.tested.com",
			name: "Tested.com",
		},
		{
			image: "njb.jpg",
			link: "https://www.youtube.com/channel/UC0intLFzLaudFG-xAvUEO-A",
			name: "Not Just Bikes",
		},
		{
			image: "eeaao.jpg",
			link:
				"https://a24films.com/films/everything-everywhere-all-at-once",
			name: "Everything Everywhere All At Once",
		},
		{
			image: "wilderpeople.jpg",
			link: "http://wilderpeople.film",
			name: "Hunt for the Wilderpeople",
		},
		{
			image: "racing_in_the_rain.jpg",
			link:
				"http://www.garthstein.com/works/the-art-of-racing-in-the-rain",
			name: "The Art of Racing in the Rain",
		},
		{
			image: "Valo4life.jpg",
			link: "http://www.valo4life.com/",
			name: "Valo 4 Life",
		},
	]
}
</script>

<style lang="stylus" scoped>
h3
	color white

#inspirations
	@media TabletUp
		display grid
		grid-template-columns 1fr 1fr 1fr
		grid-template-rows auto
		grid-column-gap 1rem

	.card-panel
		font-size 1.2rem

		span
			center X relative
			text-align center

#thingBox
	margin-bottom 2.5rem

#music
	height 8rem

	iframe
		width 80%
		max-width 30rem
		center X absolute
</style>
