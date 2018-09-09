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
					a(v-for="skill in items" :href="skill.url" )
						figure.tech-skill
							img(:src="imagePath({ file: skill.icon, path: 'logos' })" :alt="skill.name")
							figcaption {{ skill.name }}
	BackButton
	br
</template>

<script lang="ts">
import BackButton from "@/components/shared/BackButton.vue"
import { ImagePathOptions, ImageService } from "@/helpers/images.service"
import _ from "lodash"
import Vue from "vue"
import { Component } from "vue-property-decorator"
import { Getter } from "vuex-class"

@Component({
	components: {
		BackButton,
	},
	mixins: [ImageService],
})
export default class Skills extends Vue implements ImageService {
	@Getter skills: any
	imagePath: (options: ImagePathOptions) => string

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
