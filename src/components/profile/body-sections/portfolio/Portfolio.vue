<template lang="pug">
#portfolio
	BackButton
	br
	.card
		.card-content
			span.card-title Portfolio
			.portfolio
				GithubTile
				template(v-for="(project, index) in projects")
					PortfolioItem(v-bind:project="project")
	BackButton
	br
</template>

<script>
import BackButton from "@/components/shared/BackButton"
import GithubTile from "@/components/profile/body-sections/portfolio/GithubTile"
import PortfolioItem from "@/components/profile/body-sections/portfolio/PortfolioItem"
import { mapGetters } from "vuex"

export default {
	components: {
		BackButton,
		GithubTile,
		PortfolioItem,
	},
	computed: { ...mapGetters(["projects"]) },
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
</style>
