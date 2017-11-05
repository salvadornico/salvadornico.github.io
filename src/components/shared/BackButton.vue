<template lang="pug">
.back-button
	button.btn.waves-effect.waves-light.red.darken-1(v-on:click="goBack()")
		material-icon(icon="arrow_back")
</template>

<script>
import MaterialIcon from "./MaterialIcon"

export default {
	name: "back-button",
	components: {
		"material-icon": MaterialIcon
	},
	methods: {
		goBack: function() {
			this.$router.go(-1)
		}
	}
}
</script>

<style lang="stylus" scoped>
.back-button
	margin-top 2rem
</style>
