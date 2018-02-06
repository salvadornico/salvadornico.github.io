<template lang="pug">
#portfolio
	BackButton
	br
	.card
		.card-content
			span.card-title Portfolio
			.portfolio
				GithubTile.portfolio-item
				.portfolio-item.portfolio-link(v-for="project in projects")
					img.responsive-img(v-bind:src="imgLink(project.image)")
					.portfolio-item-description
						a(v-bind:href="project.url")
							h4 {{ project.title }}
						p {{ project.description }}
	BackButton
	br
</template>

<script>
import BackButton from "@/components/shared/BackButton"
import GithubTile from "@/components/profile/body-sections/portfolio/GithubTile"
import imageService from "@/helpers/imageService.js"
import { mapGetters } from "vuex"

export default {
	components: {
		BackButton,
		GithubTile,
	},
	computed: { ...mapGetters(["projects"]) },
	methods: {
		imgLink: image => imageService.get(image, "portfolio"),
	},
}
</script>

<style lang="stylus" scoped>
.card-title
	font-weight bold

.portfolio
	display grid
	grid-template-columns repeat(auto-fit, minmax(10rem, 1fr))
	grid-gap 1rem
	grid-autoflow dense
	.portfolio-item
		&:hover
			grid-column span 3
	.portfolio-link
		.portfolio-item-description
			display none
		&:hover
			display grid
			grid-template-columns 1fr 1fr
			grid-gap 1rem
			.portfolio-item-description
				display block
	.github-tile
		grid-column span 2
</style>
