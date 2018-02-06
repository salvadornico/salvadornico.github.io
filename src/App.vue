<template lang="pug">
#app
	transition(name="component-fade" mode="out-in")
		router-view
	Footer
</template>

<script>
import Footer from "@/components/shared/Footer"
import SmoothScroll from "smooth-scroll"

new SmoothScroll("a[href*='#']")

export default {
	components: {
		Footer,
	},
}
</script>

<style lang="stylus">
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
