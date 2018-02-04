<template lang="pug">
.back-button
	button.btn.waves-effect.waves-light.red.darken-1(v-on:click="goBack()")
		MaterialIcon(icon="arrow_back")
</template>

<script>
import MaterialIcon from "./MaterialIcon"

export default {
	components: {
		MaterialIcon,
	},
	props: {
		path: { type: String, default: "/" },
	},
	methods: {
		goBack: function() {
			this.$router.push({ path: this.path })
		},
	},
}
</script>

<style lang="stylus" scoped>
.back-button
	margin-top 2rem
</style>
