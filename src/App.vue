<template lang="pug">
	#app
		app-banner
		main
			parallax(image="header1.png" alt="Some Kotlin sample code")
			.container
				router-view
		app-footer
</template>

<script>
import Banner from "./components/Banner"
import Parallax from "./components/Parallax"
import Footer from "./components/Footer"

export default {
	name: "app",
	components: {
		"app-banner": Banner,
		"parallax": Parallax,
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

main
	margin-bottom 100px
</style>
