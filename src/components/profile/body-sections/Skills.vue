<template lang="pug">
#skills
	BackButton
	br
	.card
		.card-content
			span.card-title My Tech Stack
			#skillsList
				.category(v-for="(items, category) in skills")
					h5 {{ capitalize(category) }}
					a(v-for="skill in items" v-bind:href="skill.url" )
						figure.tech-skill
							img(v-bind:src="imgLink(skill.icon)" v-bind:alt="skill.name")
							figcaption {{ skill.name }}
	BackButton
	br
</template>

<script>
import BackButton from "@/components/shared/BackButton"
import imageService from "@/helpers/imageService.js"
import _ from "lodash"
import { mapGetters } from "vuex"

export default {
	components: {
		BackButton,
	},
	computed: { ...mapGetters(["skills"]) },
	methods: {
		imgLink: image => imageService.get(image, "logos"),
		capitalize: string => _.capitalize(string),
	},
}
</script>

<style lang="stylus" scoped>
#skillsList
	color black
	margin 1rem

.tech-skill
	display inline-block

	margin 1rem
		@media TabletDown
			margin 0.3rem

	img
		height 4rem

		@media TabletDown
			height @height * 0.7

	figcaption
		text-align center
</style>
