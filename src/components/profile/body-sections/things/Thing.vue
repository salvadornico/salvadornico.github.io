<template lang="pug">
.thing.col.s6.m4.l3
		a(v-bind:href="link")
			.card.small.hoverable
				.card-image
					img(v-bind:src="imgLink" v-bind:alt="name")
				.card-content.valign-wrapper
					span.black-text {{ name }}
</template>

<script lang="ts">
import imageService from "@/helpers/imageService.ts"
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"

@Component
export default class Thing extends Vue {
	@Prop() image: string
	@Prop() name: string
	@Prop() link: string

	get imgLink(): string {
		return imageService.get(this.image, "things")
	}
}
</script>

<style lang="stylus" scoped>
.thing
	width 10rem

	a:link
		color black

	span
		font-size 1.5rem
</style>
