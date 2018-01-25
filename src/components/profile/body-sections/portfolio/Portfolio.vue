<template lang="pug">
#portfolio
	BackButton
	br
	.card
		.card-content
			span.card-title Portfolio
			.row.portfolio-item(v-for="project in projects")
				.col.m4
					img.responsive-img(v-bind:src="imgLink(project.image)")
				.col.m8
					a(v-bind:href="project.url")
						h4 {{ project.title }}
					p {{ project.description }}
	BackButton
	br
</template>

<script>
import BackButton from "@/components/shared/BackButton"
import imageService from "@/helpers/imageService.js"
import { mapGetters } from 'vuex';

export default {
	components: {
		BackButton
	},
	computed: {...mapGetters(["projects"])},
	methods: {
		imgLink: image => imageService.get(image, "portfolio")
	}
}
</script>
