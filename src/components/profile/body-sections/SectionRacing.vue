<template lang="pug">
SectionCard(title="Racing")
	p.
		Racing brings together a lot of my varied interests: engineering, business/economics, sport, and community. It's something I love doing both in real life and in the simulator. I've participated in the AAP's Motorsport Development Program, Togue Battle, and helped organize virtual events for MP Turbo.
	.center-align
		.row
			.col.s6
				img.responsive-img(:src="imagePath( { file: 'mirage-cis', path: 'portfolio' })" alt="Touge Battle at Clark International Speedway")
			.col.s6
				img.responsive-img(:src="imagePath( { file: 'simrig.jpg', path: 'portfolio' })" alt="Home simulator rig")
</template>

<script lang="ts">
import SectionCard from "@/components/shared/SectionCard.vue"
import { ImagePathOptions, ImageService } from "@/helpers/images.service"
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component({
	components: {
		SectionCard,
	},
	mixins: [ImageService],
})
export default class SectionMaking extends Vue implements ImageService {
	imagePath: (options: ImagePathOptions) => string
}
</script>
