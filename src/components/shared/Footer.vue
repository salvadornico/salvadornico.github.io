<template lang="pug">
#app-footer
	footer.red.darken-4
		p.center-align.
			© 2017 Nico Salvador
</template>

<script>
export default {
	name: "app-footer"
}
</script>

<style lang="stylus">
@require "../../assets/_base"

footer
	color white
	position absolute
	bottom 0
	width 100%

	p
		line-height 2.4rem
</style>

