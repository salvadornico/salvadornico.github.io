<template lang="pug">
#skills
	BackButton
	br
	.card
		.card-content
			span.card-title My Tech Stack
			#skillsList
				.category(v-for="(items, category) in skills")
					h5 {{ capitalize(category) }}
					a(v-for="skill in items" v-bind:href="skill.url" )
						figure.tech-skill
							img(v-bind:src="imgLink(skill.icon)" v-bind:alt="skill.name")
							figcaption {{ skill.name }}
	BackButton
	br
</template>

<script lang="ts">
import BackButton from "@/components/shared/BackButton.vue"
import imageService from "@/helpers/imageService"
import _ from "lodash"
import Vue from "vue"
import { Component } from "vue-property-decorator"
import { Getter } from "vuex-class"

@Component({
	components: {
		BackButton,
	},
})
export default class Skills extends Vue {
	@Getter skills: any

	imgLink(image: string): string {
		return imageService.get(image, "logos")
	}

	capitalize(raw: string): string {
		return _.capitalize(raw)
	}
}
</script>

<style lang="stylus" scoped>
#skillsList
	color black
	margin 1rem

.tech-skill
	display inline-block

	margin 1rem
		@media TabletDown
			margin 0.3rem

	img
		height 4rem

		@media TabletDown
			height @height * 0.7

	figcaption
		text-align center
</style>
