<template lang="pug">
#skills
	back-button
	br
	.card
		.card-content
			span.card-title My Tech Stack
			p This site is built with VueJS using Pug and Stylus, with a Flask back-end API serving from a MongoDB database.
			loading-spinner(v-if="skills.length < 1")
			#skillsList
				.category(v-for="(category, index) in skills")
					h5 {{ capitalize(index) }}
					a(v-for="skill in category" v-bind:href="skill.url" )
						figure.tech-skill
							img(v-bind:src="imgLink(skill.icon)" v-bind:alt="skill.name")
							figcaption {{ skill.name }}
	back-button
	br
</template>

<script>
import BackButton from "@/components/shared/BackButton"
import LoadingSpinner from "@/components/shared/LoadingSpinner"
import api from "@/helpers/apiService.js"
import imageService from "@/helpers/imageService.js"
import _ from "lodash"

export default {
	name: "skills",
	components: {
		"back-button": BackButton,
		"loading-spinner": LoadingSpinner
	},
	data() {
		return {
			skills: []
		}
	},
	created: async function() {
		this.skills = await api.getSkills()
	},
	methods: {
		imgLink: image => imageService.get(image, "logos"),
		capitalize: string => _.capitalize(string)
	}
}
</script>

<style lang="stylus" scoped>
@require "../../../assets/_base"

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

