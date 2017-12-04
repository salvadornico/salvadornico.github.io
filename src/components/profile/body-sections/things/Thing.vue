<template lang="pug">
.thing.col.s6.m4.l3
		a(v-bind:href="link")
			.card.small.hoverable
				.card-image
					img(v-bind:src="imgLink" v-bind:alt="name")
				.card-content.valign-wrapper
					span.black-text {{ name }}
</template>

<script>
import imageService from "@/helpers/imageService.js"

export default {
	name: "app-thing",
	props: {
		image: { type: String },
		name: { type: String },
		link: { type: String }
	},
	computed: {
		imgLink: function() {
			return imageService.get(this.image, "things")
		}
	}
}
</script>

<style lang="stylus" scoped>
.thing
	width 10rem

	a:link
		color black

	span
		font-size 1.5rem
</style>
