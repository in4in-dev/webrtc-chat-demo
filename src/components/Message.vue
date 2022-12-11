<template>
	<div class="message" :class="{
		'message--from' : isMyMessage,
		'message--to' : !isMyMessage,
		'message--text' : !!message.text,
		'message--photo' : (message.attachment && message.attachment.type === 'photo'),
		'message--document' : (message.attachment && message.attachment.type !== 'photo')
	}">
		<div class="message__body">
			<template v-if="message.text">
				<pre class="message__text">{{ message.text }}</pre>
			</template>
			<template v-if="message.attachment">
				<img v-if="message.attachment.type === 'photo'" class="message__photo" :src="getAttachmentLink(message.attachment)">
				<div v-else class="message__document">
					<a :href="getAttachmentLink(message.attachment)" target="_blank" class="message__document-icon">
						<Icon name="download" />
					</a>
					<div class="message__document-body">
						<p class="message__document-name">{{ message.attachment.name }}</p>
						<p class="message__document-size">{{ message.attachment.size }} Байт</p>
					</div>
				</div>
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
	},
	methods : {
		getAttachmentLink(attachment){
			return `http://localhost:3001/download?token=${this.userStorage.token}&user_id=${this.userStorage.user.id}&attachment_id=${attachment.id}`;
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
}

.message--from .message__body {
	float: right;
}

.message--from.message--text .message__body,
.message--from.message--document .message__body{
	background: deeppink;
	color: white;
}


.message--to.message--text .message__body,
.message--to.message--document .message__body{
	background: #FFFFFF;
	color: black;
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
	line-height: 16px;
	font: inherit;
	font-size: 13px;
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

.message__photo{
	max-height: 50vh;
	max-width: 100%;
}

.message--photo{
	border-radius: 4px;
	overflow: hidden;
}

.message--photo .message__time{
	right: 7px;
	background: #DEE0E0;
	border-radius: 4px;
	padding: 2px 4px;
	color: #000000;
}

.message--document .message__time{
	right: 7px;
}

.message--document .message__body{
	padding: 14px;
}

.message__document{
	display: flex;
	align-items: center;
	justify-content: flex-start;
	min-width: 200px;
}

.message__document-icon{
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 100%;
	flex-shrink: 0;
	margin-right: 12px;
}

.message__document-name{
	font-weight: 300;
	font-size: 13px;
	line-height: 16px;
	margin-bottom: 6px;
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.message__document-size{
	font-weight: 100;
	font-size: 13px;
	line-height: 16px;
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.message--from .message__document-icon{
	background: white;
	color: deeppink;
}

.message--from .message__document-name,
.message--from .message__document-size{
	color: white;
}

.message--to .message__document-icon{
	background: deeppink;
	color: white;
}

.message--to .message__document-name{
	color: black;
}

.message--to .message__document-size{
	color: #9FA1A5;
}

</style>