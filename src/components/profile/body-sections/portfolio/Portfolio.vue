<template lang="pug">
#portfolio
	back-button
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
	back-button
	br
</template>

<script>
import BackButton from "@/components/shared/BackButton"
import dataService from "@/helpers/dataService.js"
import imageService from "@/helpers/imageService.js"

export default {
	name: "body-portfolio",
	components: {
		"back-button": BackButton
	},
	data() {
		return {
			projects: [
				{
					title: "What's That Edit?",
					description: "A site for sharing and indexing skate videos",
					url: "http://whats-that-edit.herokuapp.com",
					image: "whats-that-edit.png"
				},
				{
					title: "Monoposto",
					description: "Formula 1 data visualisation site",
					url: "http://salvadornico.x10host.com/f1vis/",
					image: "monoposto.png"
				},
				{
					title: "Brain Train",
					description: "A simple memory game",
					url: "https://salvadornico.github.io/Brain-Train/web",
					image: "brain-train.png"
				},
				{
					title: "Leather & Turf",
					description: "A Philippines Football League club reference site",
					url: "https://salvadornico.github.io/Tuitt/module-1/capstone1",
					image: "leather-turf.png"
				},
				{
					title: "Rock Paper Scissors",
					description: "A Rock-Paper-Scissors-Lizard-Spock Android game",
					url: "https://github.com/salvadornico/Rock-Paper-Scissors",
					image: "lizard-spock.png"
				}
			]
		}
	},
	methods: {
		imgLink: image => imageService.get(image, "portfolio")
	}
}
</script>

<style lang="stylus" scoped>
</style>

