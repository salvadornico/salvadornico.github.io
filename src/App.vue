<template lang="pug">
#app
	transition(name="component-fade" mode="out-in")
		router-view
	app-footer
</template>

<script>
import Footer from "@/components/shared/Footer"
import SmoothScroll from "smooth-scroll"

const scroll = new SmoothScroll("a[href*='#']") //eslint-disable-line no-unused-vars

export default {
	name: "app",
	components: {
		"app-footer": Footer
	}
}
</script>

<style lang="stylus">
@require "assets/_base"

*
	position relative
	font-family "Open Sans", sans-serif

body
	background-color bodyColor

.component-fade-enter-active, .component-fade-leave-active
	transition opacity 0.3s ease

.component-fade-enter, .component-fade-leave-to
	opacity 0
</style>
