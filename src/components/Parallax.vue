<template lang="pug">
.parallax-container
		.parallax
			img(v-bind:src="imgLink" v-bind:alt="alt")
</template>

<script>
$(document).ready(function() {
	$(".parallax").parallax();
});

export default {
	name: "parallax",
	props: {
		image: {
			type: String,
			default: "header1.png"
		},
		alt: {
			type: String,
			default: "Default"
		}
	},
	computed: {
		imgLink: function() {
			return `${this.$cloudinaryLink}/${this.image}`
		}
	}
}
</script>
