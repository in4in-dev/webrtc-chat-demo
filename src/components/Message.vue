<template>
	<div class="message" :class="{ 'message--from' : isMyMessage, 'message--to' : !isMyMessage, 'message--text' : !!message.text }">
		<div class="message__body">
			<template v-if="message.text">
				<p class="message__text">{{ message.text }}</p>
			</template>
			<template v-if="message.attachment">

			</template>
			<time class="message__time">{{ time }}</time>
		</div>
		<div class="message__clear"></div>
	</div>
</template>

<script>
import moment from "moment";

export default {
	name: "Message",
	props : {
		message : {
			required : true
		}
	},
	computed : {
		time(){
			return moment(this.message.updated_at).format('HH:mm');
		},
		isMyMessage(){
			return this.message.user_id === this.userStorage.user.id;
		}
	}
}
</script>

<style>

.message{
	margin-top: 4px;
}

.message:first-child{
	margin-top: 50px;
}

.message:last-child{
	margin-bottom: 50px;
}


.message__body{
	border-radius: 4px;
	position: relative;
	max-width: 70%;
}

.message--to .message__body{
	float: left;
	background: #FFFFFF;
	color: #475F7B;
}

.message--from .message__body{
	float: right;
	background: deeppink;
	color: white;
}

.message--from + .message--to,
.message--to + .message--from{
	margin-top: 14px;
}

.message--text.message--to .message__body{
	padding-right: 49px;
}

.message--text.message--from .message__body{
	padding-right: 77px;
}

.message__text{
	padding: 11px 14px;
	font-size: 13px;
	line-height: 16px;
}

.message__time{
	position: absolute;
	bottom: 7px;
	font-weight: 100;
	font-size: 12px;
}

.message--from .message__time{
	color: white;
	right: 42px;
}

.message--to .message__time{
	color: #9FA1A5;
	right: 7px;
}

.message__clear{
	clear: both;
}

</style>