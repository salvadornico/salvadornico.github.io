<template lang="pug">
.row
	.col.s12
		.card.horizontal.section-card
			.card-image(v-if="image")
				img(v-bind:src="imgLink(image)")
			.card-stacked
				.card-content
					span.card-title {{ title }}
					div(v-bind:class="{ margins: !image }")
						slot
				slot(name="links")
</template>

<script>
import imageService from "@/helpers/imageService.js"

export default {
	props: {
		title: { type: String },
		image: { type: String },
	},
	methods: {
		imgLink: image => imageService.get(image),
	},
}
</script>

<style lang="stylus" scoped>
.card
	color black
	width 100%

	&-image
		@media TabletUp
			width 20%

	.margins
		margin auto 2rem

	p
		margin 0.7rem auto
</style>
