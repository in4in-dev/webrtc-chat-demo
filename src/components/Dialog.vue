<template>
	<div class="dialog">
		<i class="dialog__user-picture">{{ companion.name.substr(0, 1) }}</i>
		<p class="dialog__user-name">{{ companion.name }}</p>
		<p class="dialog__message">{{ lastMessageText }}</p>
		<time class="dialog__date">{{ lastMessageDate }}</time>
		<i class="dialog__unread-count" v-if="dialog.chat.unread_count">
			{{ dialog.chat.unread_count }}
		</i>
	</div>
</template>

<script>
import moment from 'moment';

export default {
	name: "Dialog",
	props : {
		dialog : {
			required : true
		}
	},
	computed : {
		companion(){
			return this.dialog.room.users.find(u => u.id !== this.userStorage.user.id);
		},
		lastMessageText(){
			return this.dialog.message ? (this.dialog.message.text || 'Вложение') : '';
		},
		lastMessageDate(){
			let date =  moment(this.dialog.chat.updated_at);
			let today = moment().startOf('day');

			if(date < today){
				return date.format('DD.MM.YYYY');
			}else{
				return date.format("HH:mm");
			}
		}
	},
	created(){
	}
}
</script>

<style scoped>

</style>