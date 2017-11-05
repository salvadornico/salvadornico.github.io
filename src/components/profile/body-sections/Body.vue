<template lang="pug">
#app-body
	h2 Things I'm Into
	body-section-software
	body-section-things
</template>

<script>
import SectionSoftware from "./SectionSoftware"
import SectionThings from "./SectionThings"

export default {
	name: "app-body",
	components: {
		"body-section-software": SectionSoftware,
		"body-section-things": SectionThings
	}
}
</script>

<style lang="stylus" scoped>
h2
	text-align center
	color white
</style>


