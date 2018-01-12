<template lang="pug">
#portfolio
	back-button
	br
	.card
		.card-content
			span.card-title Portfolio
			.row.portfolio-item(v-for="project in projects")
				.col.m4
					img.responsive-img(v-bind:src="imgLink(project.image)")
				.col.m8
					a(v-bind:href="project.url")
						h4 {{ project.title }}
					p {{ project.description }}
	back-button
	br
</template>

<script>
import BackButton from "@/components/shared/BackButton"
import imageService from "@/helpers/imageService.js"

export default {
	name: "body-portfolio",
	components: {
		"back-button": BackButton
	},
	computed: {
		projects() {
			return this.$store.getters.projects
		}
	},
	methods: {
		imgLink: image => imageService.get(image, "portfolio")
	}
}
</script>

<style lang="stylus" scoped>
</style>

