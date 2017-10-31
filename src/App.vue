<template lang="pug">
	#app
		app-banner
		main
			app-parallax(image="header1.png" alt="Some Kotlin sample code")
			.container
				transition(name="component-fade" mode="out-in")
					router-view
				body-contacts
		app-footer
		app-fab
</template>

<script>
import Banner from "@/components/Banner"
import Parallax from "@/components/shared/Parallax"
import Contacts from "@/components/body-sections/contacts/Contacts"
import Footer from "@/components/Footer"
import FAB from "@/components/FAB"
import SmoothScroll from "smooth-scroll"

const scroll = new SmoothScroll("a[href*='#']") //eslint-disable-line no-unused-vars

export default {
	name: "app",
	components: {
		"app-banner": Banner,
		"app-parallax": Parallax,
		"body-contacts": Contacts,
		"app-footer": Footer,
		"app-fab": FAB
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
