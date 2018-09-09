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
					PortfolioItem(:project="project")
	BackButton
	br
</template>

<script lang="ts">
import GithubTile from "@/components/profile/body-sections/portfolio/GithubTile.vue"
import PortfolioItem from "@/components/profile/body-sections/portfolio/PortfolioItem.vue"
import BackButton from "@/components/shared/BackButton.vue"
import Vue from "vue"
import { Component } from "vue-property-decorator"
import { Getter } from "vuex-class"

@Component({
	components: {
		BackButton,
		GithubTile,
		PortfolioItem,
	},
})
export default class Portfolio extends Vue {
	@Getter projects: any[]
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
