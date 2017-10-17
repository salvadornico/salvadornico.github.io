<template lang="pug">
i.material-icons {{ icon }}
</template>

<script>
export default {
	name: "material-icon",
	props: {
		icon: {
			type: String,
		}
	},
}
</script>