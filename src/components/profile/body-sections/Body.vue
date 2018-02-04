<template lang="pug">
#app-body
	h2 Things I'm Into
	SectionSoftware
	SectionMaking
	SectionMarketing
	SectionBlading
	OtherThings
</template>

<script>
import SectionSoftware from "./SectionSoftware"
import SectionMaking from "./SectionMaking"
import SectionMarketing from "./SectionMarketing"
import SectionBlading from "./SectionBlading"
import OtherThings from "./OtherThings"

export default {
	components: {
		SectionSoftware,
		SectionMaking,
		SectionMarketing,
		SectionBlading,
		OtherThings,
	},
}
</script>

<style lang="stylus" scoped>
h2
	text-align center
	color white
</style>
