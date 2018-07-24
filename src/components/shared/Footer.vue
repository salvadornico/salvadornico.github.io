<template lang="pug">
footer.red.darken-4
	p.center-align.
		© 2017 Nico Salvador
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class Footer extends Vue {}
</script>

<style lang="stylus">
footer
	color white
	position absolute
	bottom 0
	width 100%

	p
		line-height 2.4rem
</style>
