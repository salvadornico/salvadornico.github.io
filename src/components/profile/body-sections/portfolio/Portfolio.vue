<template lang="pug">
#portfolio
	BackButton
	br
	.card
		.card-content
			span.card-title Portfolio
			.portfolio
				GithubTile.portfolio-item
				template(v-for="(project, index) in projects")
					PortfolioItem.portfolio-item(v-bind:project="project")
	BackButton
	br
</template>

<script>
import BackButton from "@/components/shared/BackButton"
import GithubTile from "@/components/profile/body-sections/portfolio/GithubTile"
import PortfolioItem from "@/components/profile/body-sections/portfolio/PortfolioItem"
import imageService from "@/helpers/imageService.js"
import { mapGetters } from "vuex"

export default {
	components: {
		BackButton,
		GithubTile,
		PortfolioItem,
	},
	computed: { ...mapGetters(["projects"]) },
	methods: {
		imgLink: image => imageService.get(image, "portfolio", true),
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
</style>
