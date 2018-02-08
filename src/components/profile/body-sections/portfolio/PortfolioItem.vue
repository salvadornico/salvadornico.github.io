<template lang="pug">
.portfolio-link
	img.responsive-img(v-bind:src="imgLink")
	.portfolio-item-description
		a(v-bind:href="project.url")
			h4 {{ project.title }}
		p {{ project.description }}
</template>

<script>
import imageService from "@/helpers/imageService.js"

export default {
	props: {
		project: {
			type: Object,
		},
	},
	data() {
		return {
			hovered: false,
		}
	},
	computed: {
		imgLink() {
			return imageService.get(this.project.image, "portfolio", true)
		},
	},
}
</script>

<style lang="stylus" scoped>
.portfolio-link
	.portfolio-item-description
		display none
	&:hover
		display grid
		grid-template-columns 1fr 1fr
		grid-gap 1rem
		.portfolio-item-description
			display block
</style>
