<template lang="pug">
#FAB.fixed-action-btn.tooltipped(data-position="left" data-delay="50" data-tooltip="Back to top")
	a#scrollToTopFAB.waves-effect.waves-circle.waves-light.btn-floating.btn-large.red.scale-transition.scale-out(href="#app-banner" target="_parent" data-scroll v-on:click="hideFAB()")
		material-icon(icon="arrow_upward")
</template>

<script>
import MaterialIcon from "@/components/shared/MaterialIcon"

export default {
	name: "fab",
	components: {
		"material-icon": MaterialIcon
	},
	created: function() {
		this.$eventBus.$on("openFab", this.popOutFAB)
	},
	beforeDestroy: function() {
		this.$eventBus.$off("openFab")
	},
	methods: {
		popOutFAB: () => {
			$("#scrollToTopFAB").addClass("scale-in pulse")
			setTimeout(() => {
				$("#scrollToTopFAB").removeClass("scale-out scale-in")
			}, 500)
			setTimeout(() => {
				$("#scrollToTopFAB").removeClass("pulse")
			}, 10000)
		},
		hideFAB: () => {
			$("#scrollToTopFAB").addClass("scale-out")
			$("#scrollToTopFAB").removeClass("pulse")
		}
	}
}
</script>

<style lang="stylus" scoped>
#FAB
	bottom 6rem
</style>

