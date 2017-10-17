<template lang="pug">
i.fa(v-bind:class="iconClass" aria-hidden="true")
</template>

<script>
export default {
	name: "fa-icon",
	props: {
		icon: {
			type: String,
		}
	},
	computed: {
		iconClass: function() {
			return `fa-${this.icon}`
		},
	}
}
</script>

