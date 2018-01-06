<template lang="pug">
#FAB.fixed-action-btn.tooltipped(data-position="left" data-delay="50" data-tooltip="Back to top")
	a#scrollToTopFAB.waves-effect.waves-circle.waves-light.btn-floating.btn-large.red.scale-transition.scale-out(ref="fabBtn" href="#app-banner" target="_parent" data-scroll v-on:click="hideFAB()")
		material-icon(icon="arrow_upward")
</template>

<script>
import MaterialIcon from "@/components/shared/MaterialIcon"

export default {
	name: "fab",
	components: {
		"material-icon": MaterialIcon
	},
	data() {
		return {
			fabBtn: { type: HTMLAnchorElement }
		}
	},
	created: function() {
		this.$eventBus.$on("openFab", this.popOutFAB)
	},
	mounted: function() {
		this.fabBtn = this.$refs.fabBtn
	},
	beforeDestroy: function() {
		this.$eventBus.$off("openFab")
	},
	methods: {
		popOutFAB: function() {
			const fab = this.fabBtn
			fab.classList.replace("scale-out", "scale-in")
			fab.classList.add("pulse")
			setTimeout(function() {
				fab.classList.remove("pulse")
			}, 10000)
		},
		hideFAB: function() {
			this.fabBtn.classList.remove("pulse")
			this.fabBtn.classList.replace("scale-in", "scale-out")
		}
	}
}
</script>

<style lang="stylus" scoped>
#FAB
	bottom 6rem
</style>

