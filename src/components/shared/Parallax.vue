<template lang="pug">
.parallax-container
		.parallax
			img(v-bind:src="imgLink" v-bind:alt="alt")
</template>

<script>
$(document).ready(function() {
	$(".parallax").parallax()
})

export default {
	name: "app-parallax",
	props: {
		image: {
			type: String
		},
		alt: {
			type: String
		}
	},
	computed: {
		imgLink: function() {
			return `${this.$cloudinaryLink}/${this.image}`
		}
	}
}
</script>

<style lang="stylus" scoped>
.parallax-container
	height 400px
</style>

