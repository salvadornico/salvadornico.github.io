<template lang="pug">
.row
	.col.s12
		.card.horizontal
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
export default {
	name: "section-card",
	props: {
		title: { type: String },
		image: { type: String }
	},
	methods: {
		imgLink: function(image) {
			return `${this.$cloudinaryLink}/${image}`
		}
	}
}
</script>

<style lang="stylus" scoped>
@require "../../assets/_base"

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

