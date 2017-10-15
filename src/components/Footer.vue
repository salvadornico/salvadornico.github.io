<template lang="pug">
#app-footer
	footer.red.darken-4
		p.center-align.
			© 2017 Nico Salvador

	#FAB.fixed-action-btn.tooltipped(data-position="left" data-delay="50" data-tooltip="Back to top")
		a#scrollToTopFAB.waves-effect.waves-circle.waves-light.btn-floating.btn-large.red.scale-transition.scale-out(href="#banner" target="_parent" data-scroll)
			i.material-icons arrow_upward
</template>

<script>
export default {
	name: "app-footer"
}
</script>

<style lang="stylus">
@require "../assets/_base"

footer
	position absolute
	bottom 0
	width 100%

	p
		line-height 2.4rem

#FAB
	bottom 120px
</style>

