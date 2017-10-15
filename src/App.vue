<template lang="pug">
	#app
		app-banner
		router-view
		app-footer
</template>

<script>
import Banner from "./components/Banner"
import Footer from "./components/Footer"

export default {
	name: "app",
	components: {
		"app-banner": Banner,
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
	color white
</style>
