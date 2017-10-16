<template lang="pug">

#app-body
	h2 Things I'm Into
	body-section-software

</template>

<script>
import SectionSoftware from "./body-sections/SectionSoftware"

export default {
	name: "app-body",
	components: {
		"body-section-software": SectionSoftware,
	}
}
</script>

