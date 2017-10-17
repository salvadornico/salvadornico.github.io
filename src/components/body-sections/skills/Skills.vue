<template lang="pug">
#skills
	back-button
	br
	.card
		.card-content
			#skillsList
				a(v-for="skill in skills" v-bind:href="skill.url")
					figure.tech-skill
						img(v-bind:src="imgLink(skill.icon)" v-bind:alt="skill.name")
						figcaption {{ skill.name }}
</template>

<script>
import BackButton from "@/components/shared/BackButton"

$(document).ready(function() {
	$(".tooltipped").tooltip({ delay: 50 });
});

export default {
	name: "skills",
	components: {
		"back-button": BackButton,
	},
	data() {
		return {
			skills: [],
		}
	},
	created: function() {
		fetch(`${this.$apiLink}/skills`)
			.then(response => response.json())
			.then(data => {
				this.skills = data.result
			})
	},
	methods: {
		imgLink: function(image) {
			return `${this.$cloudinaryLink}/logos/${image}`
		}
	}
}
</script>

<style lang="stylus" scoped>
@require "../../../assets/_base"

#skillsList
	center X relative

	@media TabletUp
		max-width 70%

.tech-skill
	display inline-block

	margin 10px
		@media TabletDown
			margin 5px

	img
		height 80px

		@media TabletDown
			height @height * 0.7

	figcaption
		text-align center
</style>

