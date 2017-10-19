<template lang="pug">
#skills
	back-button
	br
	.card
		.card-content
			#skillsList
				.category(v-for="(category, index) in skills")
					h5 {{ capitalize(index) }}
					a(v-for="skill in category" v-bind:href="skill.url")
						figure.tech-skill
							img(v-bind:src="imgLink(skill.icon)" v-bind:alt="skill.name")
							figcaption {{ skill.name }}
</template>

<script>
import BackButton from "@/components/shared/BackButton"
import _ from "lodash"

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
				let grouped = _.groupBy(data.result, item => item.category)
				console.log(grouped)
				this.skills = grouped
			})
	},
	methods: {
		imgLink: function(image) {
			return `${this.$cloudinaryLink}/logos/${image}`
		},
		capitalize: string => _.capitalize(string),
	}
}
</script>

<style lang="stylus" scoped>
@require "../../../assets/_base"

#skillsList
	color black
	margin 20px

.tech-skill
	display inline-block

	margin 10px
		@media TabletDown
			margin 5px

	img
		height 70px

		@media TabletDown
			height @height * 0.7

	figcaption
		text-align center
</style>

