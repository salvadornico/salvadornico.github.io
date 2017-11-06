<template lang="pug">
#portfolio
	back-button
	br
	h2 Test
	back-button
	br
</template>

<script>
import BackButton from "@/components/shared/BackButton"

export default {
	name: "body-portfolio",
	components: {
		"back-button": BackButton
	}
}
</script>
