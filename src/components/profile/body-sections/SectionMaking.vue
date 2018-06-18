<template lang="pug">
SectionCard(title="Making Things")
	p.
		Design thinking has always been my mindset. There's just something special about creating something new with your hands, whatever it is... 3D modelling and printing, Lego, basic woodworking, and hopefully electronics as well soon.
	p.
		Coding is making too :)
	.center-align
		.row
			.col.s6
				a(href="https://www.instagram.com/p/BQXN2cAgAO7/")
					img.responsive-img(v-bind:src="getImgLink('3d_printing')" alt="3D printing at Builtable Makerspace")
			.col.s6
				a(href="https://www.instagram.com/p/BMdli-lAUpg/")
					img.responsive-img(v-bind:src="getImgLink('lego_dinosaur')" alt="Lego creation")
		.row
			img.responsive-img(v-bind:src="getImgLink('park_design')" alt="3D modelled skatepark design")
</template>

<script>
import SectionCard from "@/components/shared/SectionCard"
import imageService from "@/helpers/imageService.js"

export default {
	components: {
		SectionCard,
	},
	methods: {
		getImgLink: image => imageService.get(`portfolio/${image}.jpg`),
	},
}
</script>
