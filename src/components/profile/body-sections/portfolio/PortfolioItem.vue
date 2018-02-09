<template lang="pug">
.portfolio-item
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
	computed: {
		imgLink() {
			return imageService.getThumb(this.project.image, "portfolio")
		},
	},
}
</script>

<style lang="stylus" scoped>
.portfolio-item
	display grid
	&:hover
		grid-row span 2
	.portfolio-item-description
		display none
	&:hover
		display grid
		.portfolio-item-description
			display block
</style>
