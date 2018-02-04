<template lang="pug">
a(v-bind:href="url")
	img.hoverable(v-bind:src="imgLink(icon)" v-bind:alt="name")
</template>

<script>
import imageService from "@/helpers/imageService.js"

export default {
	props: {
		name: { type: String },
		icon: { type: String },
		url: { type: String },
	},
	methods: {
		imgLink: image => imageService.get(`${image}.png`, "icons"),
	},
}
</script>

<style lang="stylus" scoped>
img
	width 6rem
	border-radius 50%

	@media MobileOnly
		width 5rem
</style>
