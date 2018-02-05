<template lang="pug">
.github-tile.card.grey
	h5 Latest Github Activity
</template>

<script>
import { mapGetters } from "vuex"

export default {
	computed: { ...mapGetters(["projects"]) },
}
</script>

<style lang="stylus" scoped>
.github-tile
	padding 1rem
</style>
