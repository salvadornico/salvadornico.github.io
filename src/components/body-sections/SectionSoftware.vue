<template lang="pug">
.row
	.col.s12
		.card.horizontal
			.card-image
				img(src="https://lorempixel.com/200/200")
			.card-stacked
				.card-content
					span.card-title Software development
					p I've always enjoyed tinkering with technology and poking around the deepest levels of software settings, so programming was a natural next step. I love the way it demands both the ability to solve problems creatively and then the application of those ideas in a logical and systematic fashion.
				.card-action
					router-link(to="/portfolio") Portfolio
					router-link(to="/skills") My Stack
</template>

<script>
export default {
	name: "body-section-software"
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
</style>

