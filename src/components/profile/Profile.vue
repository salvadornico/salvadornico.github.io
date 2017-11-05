<template lang="pug">
#profile
	app-banner
	main
		app-parallax(image="header1.png" alt="Some Kotlin sample code")
		.container
			transition(name="component-fade" mode="out-in")
				router-view
		app-parallax(type="video" video="/static/images/makerbot.mp4" image="header2gif.gif" alt="3D printing")
		body-contacts
	app-fab
</template>

<script>
import Banner from "@/components/profile/body-sections/Banner"
import Parallax from "@/components/shared/Parallax"
import Contacts from "@/components/profile/body-sections/contacts/Contacts"
import FAB from "@/components/profile/body-sections/FAB"

export default {
	name: "app",
	components: {
		"app-banner": Banner,
		"app-parallax": Parallax,
		"body-contacts": Contacts,
		"app-fab": FAB
	}
}
</script>

<style lang="stylus">
@require "../../assets/_base"

.component-fade-enter-active, .component-fade-leave-active
	transition opacity 0.3s ease

.component-fade-enter, .component-fade-leave-to
	opacity 0
</style>
