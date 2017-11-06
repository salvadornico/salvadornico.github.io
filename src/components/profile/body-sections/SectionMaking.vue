<template lang="pug">
section-card(title="Making Things")
	p.
		Design thinking has always been my mindset. There's just something special about creating something new with your hands, whatever it is... 3D modelling and printing, Lego, basic woodworking, and hopefully electronics as well soon.
	p.
		Coding is making too :)
	.center-align
		a(href="https://www.instagram.com/p/BQXN2cAgAO7/")
			img.responsive-img(src="https://instagram.fmnl4-3.fna.fbcdn.net/t51.2885-15/s320x320/e35/14677420_424099854587814_266605086967332864_n.jpg" alt="3D printing at Builtable Makerspace")
		a(href="https://www.instagram.com/p/BMdli-lAUpg/")
			img.responsive-img(src="https://instagram.fmnl8-1.fna.fbcdn.net/t51.2885-15/s320x320/e35/14693650_1226332430742915_2680398392609210368_n.jpg" alt="Lego creation")
		img.responsive-img(v-bind:src="imgLink" alt="3D modelled skatepark design")
</template>

<script>
import SectionCard from "@/components/shared/SectionCard"

export default {
	name: "body-section-making",
	components: {
		"section-card": SectionCard
	},
	computed: {
		imgLink: function() {
			return `${this.$cloudinaryLink}/portfolio/park_design.jpg`
		}
	}
}
</script>
