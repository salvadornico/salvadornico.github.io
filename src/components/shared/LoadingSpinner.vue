<template lang="pug">
.preloader-wrapper.small.active
	.spinner-layer.spinner-green-only
		.circle-clipper.left
			.circle
		.gap-patch
			.circle
		.circle-clipper.right
			.circle
</template>

<script>
export default {
	name: "LoadingSpinner"
}
</script>
