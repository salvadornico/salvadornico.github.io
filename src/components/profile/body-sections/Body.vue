<template lang="pug">
#app-body
	h2 Things I'm Into
	body-section-software
	body-section-making
	body-section-marketing
	body-section-blading
	body-other-things
</template>

<script>
import SectionSoftware from "./SectionSoftware"
import SectionMaking from "./SectionMaking"
import SectionMarketing from "./SectionMarketing"
import SectionBlading from "./SectionBlading"
import OtherThings from "./OtherThings"

export default {
	name: "app-body",
	components: {
		"body-section-software": SectionSoftware,
		"body-section-making": SectionMaking,
		"body-section-marketing": SectionMarketing,
		"body-section-blading": SectionBlading,
		"body-other-things": OtherThings
	}
}
</script>

<style lang="stylus" scoped>
h2
	text-align center
	color white
</style>


