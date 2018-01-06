<template lang="pug">
.parallax-container(v-bind:class="{ video:video }")
		.parallax(ref="parallax")
			img(v-if="type == 'image'" v-bind:src="imgLink" v-bind:alt="alt")
			video(v-if="type == 'video'" muted autoplay loop v-bind:poster="imgLink")
				source(v-bind:src="video" type="video/mp4")
</template>

<script>
import imageService from "@/helpers/imageService.js"

export default {
	name: "app-parallax",
	props: {
		type: { type: String, default: "image" },
		image: { type: String },
		video: { type: String, default: "" },
		alt: { type: String }
	},
	computed: {
		imgLink: function() {
			return imageService.get(this.image)
		}
	},
	mounted: function() {
		const elem = this.$refs.parallax
		const instance = M.Parallax.init(elem, {})
	}
}
</script>

<style lang="stylus" scoped>
.parallax-container
	height 30rem

	&.video
		@media MobileOnly
			height 250px
			margin-bottom -100px

		@media TabletOnly
			height 550px
			margin-bottom -250px

		@media DesktopOnly
			margin-bottom 0

		video
			width 100vw
</style>

