<template>
	<div class="message">
		<template v-if="message.text">
			{{ message.text }}
		</template>
		<template v-if="message.attachment">

		</template>
	</div>
</template>

<script>
export default {
	name: "Message",
	props : {
		message : {
			required : true
		}
	}
}
</script>

<style scoped>

</style>