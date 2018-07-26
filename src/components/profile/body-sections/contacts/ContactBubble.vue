<template lang="pug">
a(v-bind:href="url").contact-bubble
	img.hoverable(v-bind:src="imgLink(icon)" v-bind:alt="name")
</template>

<script lang="ts">
import imageService from "@/helpers/imageService.ts"
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"

@Component
export default class ContactBubble extends Vue {
	@Prop() name: string
	@Prop() icon: string
	@Prop() url: string

	imgLink(image: string): string {
		return imageService.get(`${image}.png`, "icons")
	}
}
</script>

<style lang="stylus" scoped>
img
	width 6rem
	border-radius 50%

	@media MobileOnly
		width 5rem
</style>
