<template>
	<section class="messages">
		<div class="messages__header">
			<p class="messages__user-name">{{ chatStorage.selectedRoomCompanion.name }}</p>
			<p class="messages__user-status messages__user-status--online" v-if="chatStorage.onlineUsers.indexOf(chatStorage.selectedRoomCompanion.id) >= 0">Online</p>
			<p class="messages__user-status messages__user-status--offline" v-else>Offline</p>
		</div>
		<div class="messages__dump">
			<template v-for="(message,i) in chatStorage.messages" :key="message.id">
				<div class="messages__date" v-if="!i || messageDate(message) !== messageDate(chatStorage.messages[i - 1])">
					<span class="messages__date-text">{{ messageDate(message) }}</span>
				</div>
				<Message :message="message" />
			</template>
		</div>
		<form class="messages__footer" @submit.prevent="sendMessage">
			<label class="messages__attachment">
				<Icon name="clip" />
				<input type="file" class="messages__attachment-input">
			</label>
			<textarea class="messages__textarea" placeholder="Введите сообщение..." v-autosize="300" v-model="message" @keydown.shift.enter.prevent="sendMessage"></textarea>
			<button type="submit" class="messages__button">
				<Icon name="send" />
			</button>
		</form>
	</section>
</template>

<script>
import Message from "@/components/Message";
import moment from "moment";

export default {
	name: "Messages",
	components: {
		Message
	},
	data(){
		return {
			readIntervalId : null,
			message : ''
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

		},

		messageDate(message){
			return moment(message.created_at).format('DD.MM.yyyy');
		},

		sendMessage(){

			if(this.message.length){

				this.appStorage.socket.emit('message.send', {
					room_id : this.chatStorage.selectedRoomId,
					text : this.message
				});

				this.message = '';

			}

		},

		onTextareaEnter(e){

			let index = e.selectionStart,
				length = e.selectionEnd;

			e.target.value = e.target.value.substr(0, index) + "\n" + e.target.value.substr(length + 1);
		}

	},
	beforeDestroy() {
		this.readIntervalId && clearInterval(this.readIntervalId);
	},
	created(){

		this.readIntervalId = setInterval(() => {
			this.appStorage.socket.emit('chat.read', {
				room_id : this.chatStorage.selectedRoomId
			});
		}, 1000);

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
		color: black;
		font-size: 14px;
		line-height: 17px;
		margin-bottom: 2px;
	}

	.messages__user-status{
		font-weight: 100;
		font-size: 14px;
		line-height: 17px;
	}

	.messages__user-status--online{
		color: deeppink;
	}

	.messages__user-status--offline{
		color: #9FA1A5;
	}

	.messages__footer{
		flex-shrink: 0;
	}

	.messages__dump{
		padding: 0 20px;
		height: 100%;
		overflow: auto;
	}

	.messages__date{
		text-align: center;
		margin: 18px 0 40px;
	}

	.messages__date-text{
		font-weight: 300;
		font-size: 13px;
		line-height: 17px;
		text-align: center;
		color: black;
		padding: 5px 12px;
		display: inline-block;
		background: #FFFFFF;
		border-radius: 100px;
	}

	.messages__footer{
		padding-left: 34px;
		background: white;
		flex-shrink: 0;
		width: 100%;
		position: relative;
		border-top: 1px solid rgba(199, 207, 214, 0.25);
	}

	.messages__textarea{
		padding: 14px 50px 16px 16px;
		height: 46px;
		width: 100%;
		color: black;
		font-weight: 100;
		font-size: 14px;
		line-height: 19px;
	}

	.messages__attachment{
		position: absolute;
		left: 13px;
		top: 14px;
		color: #9FA1A5;
	}

	.messages__button{
		position: absolute;
		right: 20px;
		top: 12px;
		background: transparent;
		color: #e3e3e5;
	}

	.messages__attachment:hover,
	.messages__button:hover{
		color: deeppink;
	}

	.messages__attachment-input{
		position: fixed;
		left: -100vw;
		top: -100vw;
		opacity: 0;
	}



</style>