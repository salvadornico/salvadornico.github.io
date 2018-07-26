<template lang="pug">
.portfolio-item
	img.responsive-img(v-bind:src="imagePath({ file: project.image, path: 'portfolio' })")
	.portfolio-item-description
		a(v-bind:href="project.url")
			h4 {{ project.title }}
		p {{ project.description }}
</template>

<script lang="ts">
import { ImagePathOptions, ImageService } from "@/helpers/images.service"
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"

@Component({
	mixins: [ImageService],
})
export default class PortfolioItem extends Vue implements ImageService {
	@Prop() project: any

	imagePath: (options: ImagePathOptions) => string
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
