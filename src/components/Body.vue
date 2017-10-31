<template lang="pug">
#app-body
	h2 Things I'm Into
	body-section-software
	body-section-things
</template>

<script>
import SectionSoftware from "./body-sections/SectionSoftware"
import SectionThings from "./body-sections/SectionThings"

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


