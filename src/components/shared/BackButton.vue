<template lang="pug">
.back-button
	router-link.btn.waves-effect.waves-light.red.darken-1(to="/")
		material-icon(icon="arrow_back")
</template>

<script>
import MaterialIcon from "./MaterialIcon"

export default {
	name: "back-button",
	components: {
		"material-icon": MaterialIcon
	}
}
</script>

<style lang="stylus" scoped>
.back-button
	margin-top 30px
</style>
