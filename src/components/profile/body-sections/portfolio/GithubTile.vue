<template lang="pug">
.github-tile.card.grey
	h5 Latest Github Activity
	ul
		li.repo(v-for="repo in repos") {{ repo.name }}
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
	computed: { ...mapGetters(["repos"]) },
	created() {
		this.fetchRepos()
	},
	methods: { ...mapActions(["fetchRepos"]) },
}
</script>

<style lang="stylus" scoped>
.github-tile
	padding 1rem
	grid-column span 2
</style>
