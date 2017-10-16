<template lang="pug">
.row
	.col.s12.m7
		.card.horizontal
			.card-image
				img(src="https://lorempixel.com/100/190/nature/6")
			.card-stacked
				.card-content
					span.card-title Software development
					p I've always enjoyed tinkering with technology and poking around the deepest levels of software settings, so programming was a natural next step. I love the way it demands both the ability to solve problems creatively and then the application of those ideas in a logical and systematic fashion.
					br
					p Pug, Stylus, ES6 Javascript, and Flask are my preferred stack, while Kotlin and Python for task scripting are my two other favorite languages. My day job is as a business software engineer working mostly in PHP and mySQL, and I also know my way with Java (mostly for Android).
				.card-action
					router-link(to="/portfolio") Portfolio
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
</style>

