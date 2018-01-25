<template lang="pug">
#things
	h3.center-align.section-header Things That Inspire Me
	#inspirations.row.page-section
		.card-panel.red.lighten-1.flow-text.valign-wrapper(v-for="inspiration in inspirations")
				span.white-text {{ inspiration.text }}

	h3.center-align.section-header Things I'm Enjoying Lately
	#thingBox.row.page-section
		div(v-for="thing in things")
			Thing(v-bind:name="thing.name" v-bind:image="thing.image" v-bind:link="thing.link")

	#music.row
		iframe(src="https://embed.spotify.com/?uri=spotify%3Auser%3A12175595202%3Aplaylist%3A0UmSRTsfZlo6dG4XrydQ4w" frameborder="0" allowtransparency="true")
</template>

<script>
import Thing from "./things/Thing"
import { mapGetters } from "vuex"

export default {
	components: {
		Thing
	},
	computed: {...mapGetters(["inspirations", "things"])}
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