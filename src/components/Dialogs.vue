<template>
	<section class="dialogs">
		<Dialog class="dialogs__item"
			v-for="dialog in chatStorage.dialogs"
		    :key="dialog.id"
		    :dialog="dialog"
		    :selected="chatStorage.selectedRoomId === dialog.room.id"
		    @click.prevent="chatStorage.selectedRoomId = dialog.room.id"
		/>
	</section>
</template>

<script>
import Dialog from "@/components/Dialog";
export default {
	name: "Dialogs",
	components : {
		Dialog
	}
}
</script>

<style scoped>

</style>