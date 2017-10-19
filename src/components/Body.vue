<template lang="pug">

#app-body
	h2 Things I'm Into
	body-section-software
	body-contacts

</template>

<script>
import SectionSoftware from "./body-sections/SectionSoftware"
import Contacts from "./body-sections/contacts/Contacts"

export default {
	name: "app-body",
	components: {
		"body-section-software": SectionSoftware,
		"body-contacts": Contacts,
	}
}
</script>

<style lang="stylus" scoped>
h2
	text-align center
	color white
</style>


