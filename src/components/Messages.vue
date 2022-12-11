<template>
	<section class="messages">
		<div class="messages__header">
			<p class="messages__user-name">Name</p>
			<p class="messages__user-online">Online</p>
		</div>
		<div class="messages__dump">
			<Message v-for="message in testMessages" :key="message.id" :message="message" />
		</div>
		<form class="messages__footer">
			<a href="#" class="messages__attachment"></a>
			<textarea class="messages__textarea"></textarea>
			<button type="submit" class="messages__button"></button>
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
		return {
			testMessages: [
				{
					id: 1,
					room_id : 1,
					user_id : 1,
					created_at : '2020-01-02 20:00',
					updated_at : '2020-01-02 20:00',
					text : 'Тест сообщение'
				},
				{
					id: 2,
					room_id : 1,
					user_id : 2,
					created_at : '2020-01-02 20:00',
					updated_at : '2020-01-02 20:00',
					text : 'Тест сообщение'
				},
				{
					id: 3,
					room_id : 1,
					user_id : 1,
					created_at : '2020-01-02 20:00',
					updated_at : '2020-01-02 20:00',
					text : 'Тест большое очень сообщение, занимающее много места среди звезд. Да! Сообщение-гигант!'
				},
				{
					id: 4,
					room_id : 1,
					user_id : 2,
					created_at : '2020-01-02 20:00',
					updated_at : '2020-01-02 20:00',
					text : 'Тест большое очень сообщение, занимающее много места среди звезд. Да! Сообщение-гигант!'
				},
				{
					id: 5,
					room_id : 1,
					user_id : 2,
					created_at : '2020-01-02 20:00',
					updated_at : '2020-01-02 20:00',
					text : 'Т'
				},
				{
					id: 6,
					room_id : 1,
					user_id : 2,
					created_at : '2020-01-02 20:00',
					updated_at : '2020-01-02 20:00',
					text : 'Тест большое очень сообщение, занимающее много места среди звезд. Да! Сообщение-гигант!'
				},
				{
					id: 7,
					room_id : 1,
					user_id : 1,
					created_at : '2020-01-02 20:00',
					updated_at : '2020-01-02 20:00',
					text : 'Тест'
				},
				{
					id: 8,
					room_id : 1,
					user_id : 2,
					created_at : '2020-01-02 20:00',
					updated_at : '2020-01-02 20:00',
					text : 'Тест'
				},
				{
					id: 9,
					room_id : 1,
					user_id : 1,
					created_at : '2020-01-02 20:00',
					updated_at : '2020-01-02 20:00',
					text : 'Тест большое очень сообщение, занимающее много места среди звезд. Да! Сообщение-гигант!'
				},
				{
					id: 10,
					room_id : 1,
					user_id : 2,
					created_at : '2020-01-02 20:00',
					updated_at : '2020-01-02 20:00',
					text : 'Тест большое очень сообщение, занимающее много места среди звезд. Да! Сообщение-гигант!'
				},
				{
					id: 11,
					room_id : 1,
					user_id : 2,
					created_at : '2020-01-02 20:00',
					updated_at : '2020-01-02 20:00',
					text : 'Т'
				},
				{
					id: 12,
					room_id : 1,
					user_id : 2,
					created_at : '2020-01-02 20:00',
					updated_at : '2020-01-02 20:00',
					text : 'Тест большое очень сообщение, занимающее много места среди звезд. Да! Сообщение-гигант!'
				},
			]
		}
	},
	computed : {
		companion(){
			// return this.dialog.room.users.find(u => u.id !== this.userStorage.user.id);
		},
	},
	methods : {
		loadLastMessages(){

			this.appStorage.socket.emit('chat.history', {
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
		height: 54px;
	}

	.messages__user-name{
		color: #475F7B;
		font-size: 14px;
		line-height: 17px;
		margin-bottom: 2px;
	}

	.messages__user-online{
		font-weight: 100;
		font-size: 14px;
		color: #9FA1A5;
		line-height: 17px;
	}

	.messages__footer{
		flex-shrink: 0;
	}

	.messages__dump{
		padding: 0 20px;
		height: 100%;
		overflow: auto;
	}

</style>