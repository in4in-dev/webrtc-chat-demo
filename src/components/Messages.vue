<template>
	<section class="messages">
		<div class="messages__header">
			<p class="messages__user-name">Name</p>
		</div>
		<div class="messages__dump">
			<Message v-for="message in chatStorage.messages" :key="message.id" :message="message" />
		</div>
		<form class="messages__footer">

		</form>
	</section>
</template>

<script>
import Message from "@/components/Message";

export default {
	name: "Messages",
	components: {
		Message
	},
	data(){
	},
	computed : {
		companion(){
			// return this.dialog.room.users.find(u => u.id !== this.userStorage.user.id);
		},
	},
	methods : {
		loadLastMessages(){

			this.socket.emit('chat.history', {
				room_id : this.chatStorage.selectedRoomId,
				limit : 100
			});

		}
	},
	watch : {
		['chatStorage.selectedRoomId'](){
			this.messages = [];
			this.loadLastMessages();
		}
	},
	created(){
		this.loadLastMessages();
	}
}
</script>

<style>

	.messages{
		background: #F2F4F4;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: space-between;
	}

	.messages__header{
		flex-shrink: 0;
		background: white;
		padding: 10px 16px;
	}

	.messages__user-name{
		color: #475F7B;
		font-size: 14px;
	}

	.messages__footer{
		flex-shrink: 0;
	}

</style>