<template lang="pug">
a(v-bind:href="url")
	img.hoverable(v-bind:src="imgLink(icon)" v-bind:alt="name")
</template>

<script>
export default {
	name: "contact-bubble",
	props: {
		name: {
			type: String,
		},
		icon: {
			type: String,
		},
		url: {
			type: String,
		}
	},
	methods: {
		imgLink: function(image) {
			return `${this.$cloudinaryLink}/icons/${image}.png`
		},
	}
}
</script>

<style lang="stylus" scoped>
img
	width 80px
	border-radius 50%

	@media MobileOnly
		width 60px
</style>

