<template>
	<div class="dialog" :class="{'dialog--selected' : selected}">
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
		},
		selected : {
			default : false
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

<style>

	.dialog{
		position: relative;
		height: 62px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding-left: 68px;
		transition: background 0.3s;
		cursor: pointer;
		user-select: none;
	}

	.dialog__user-picture{
		width: 46px;
		height: 46px;
		border-radius: 100%;
		background: deeppink;
		color: pink;
		position: absolute;
		left: 10px;
		top: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30px;
		font-style: normal;
	}

	.dialog__user-name{
		font-weight: 300;
		font-size: 14px;
		color: #475F7B;
		margin-bottom: 8px;
		padding-right: 77px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.dialog__message{
		font-weight: 100;
		font-size: 14px;
		color: #9FA1A5;
		white-space: nowrap;
		padding-right: 100px;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.dialog__date{
		position: absolute;
		right: 4px;
		top: 14px;
		font-weight: 100;
		font-size: 12px;
		color: #9FA1A5;
	}

	.dialog__unread-count{
		position: absolute;
		bottom: 11px;
		right: 4px;
		width: 18px;
		height: 18px;
		text-align: center;
		background: deeppink;
		border-radius: 16px;
		color: white;
		font-size: 12px;
		font-style: normal;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.dialog:hover, .dialog--selected{
		background: #F2F4F4;
	}

</style>