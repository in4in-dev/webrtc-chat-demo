<template>
	<section class="dialogs">
		<div class="dialogs__header">
		</div>
		<div class="dialogs__dump">
			<Dialog class="dialogs__item"
			        v-for="dialog in chatStorage.dialogs"
			        :key="dialog.id"
			        :dialog="dialog"
			        :selected="chatStorage.selectedRoomId === dialog.room.id"
			        @click.prevent="selectDialog(dialog)"
			/>
		</div>
	</section>
</template>

<script>
import Dialog from "@/components/Dialog";
export default {
	name: "Dialogs",
	components : {
		Dialog
	},
	methods : {
		selectDialog(dialog){
			this.chatStorage.selectedRoomId = dialog.room.id;
			this.chatStorage.selectedRoomCompanion = dialog.room.users.find(u => u.id !== this.userStorage.user.id);
		}
	}
}
</script>

<style>

	.dialogs{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
	}

	.dialogs__dump{
		overflow: auto;
		height: 100%;
		width: 100%;
	}

	.dialogs__header{
		width: 100%;
		flex-shrink: 0;
		height: 54px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding: 0 3px;
		border-bottom: 1px solid rgba(199, 207, 214, 0.25);
	}

	.dialogs__new{
		color: #9FA1A5;
		font-size: 24px;
		padding: 0 3px;
		font-weight: 100;
	}

</style>