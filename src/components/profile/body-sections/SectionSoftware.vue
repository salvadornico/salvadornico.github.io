<template lang="pug">
section-card(title="Software Development")
	.row
		.col.s12.m8
			p I've always enjoyed tinkering with technology and poking around the deepest levels of software settings, so programming was a natural next step. I love the way it demands both the ability to solve problems creatively and then the application of those ideas in a logical and systematic fashion.
		.col.s12.m4
			img.responsive-img(v-bind:src="imgLink")
	.card-action(slot="links")
		router-link(to="/portfolio") Portfolio
		router-link(to="/skills") My Stack
</template>

<script>
import SectionCard from "@/components/shared/SectionCard"

export default {
	name: "body-section-software",
	components: {
		"section-card": SectionCard
	},
	computed: {
		imgLink: function() {
			return `${this.$cloudinaryLink}/vue-code.png`
		}
	}
}
</script>
