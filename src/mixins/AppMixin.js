import {io} from "socket.io-client";

export default {

	created(){

		let socket = io('ws://localhost:3000', {
			path : '/',
			transports : ['websocket']
		});

		socket.on('connect', () => {
			this.appStorage.socket = socket;
			this.appStorage.ready = true;
		});

		socket.on('on.user.authorized', data => {

			if(data.success){
				this.userStorage.isAuth = true;
				this.userStorage.user = data.user;
				this.chatStorage.dialogs = data.dialogs;
			}else{
				alert('Auth error');
			}

		});

		socket.on('on.message.new', data => {

			if(data.room.id === this.chatStorage.selectedRoomId){
				this.chatStorage.messages.push(data.message);
			}

		});

		socket.on('on.message.delete', data => {

			if(data.room.id === this.chatStorage.selectedRoomId){
				this.chatStorage.messages = this.chatStorage.messages.filter(m => m.id === data.message.id);
			}

		});

		socket.on('on.chat.delete', data => {

			if(data.room.id === this.chatStorage.selectedRoomId){
				this.chatStorage.selectedRoomId = null;
				this.chatStorage.selectedRoomCompanion = null;
			}

			this.chatStorage.dialogs = this.chatStorage.dialogs.filter(d => d.room.id === data.room.id);

		});

		socket.on('on.chat.clear', data => {

			if(data.room.id === this.chatStorage.selectedRoomId){
				this.chatStorage.messages = [];
			}

		});

		socket.on('on.chat.read', data => {

			this.chatStorage.dialogs = this.chatStorage.dialogs.map(dialog => {

				if(data.room.id === dialog.room.id){
					return {
						...dialog,
						chat : {
							...dialog.chat,
							unread_count : 0
						}
					}
				}

				return dialog;

			})

		});

		socket.on('on.user.online', data => {
			this.chatStorage.onlineUsers = data.users;
		});


		// socket.on('on.chat.history', data => {
		//
		// 	if(this.chatStorage.selectedRoomId === data.room.id){
		//
		// 		let newMessagesDump = [].concat(this.chatStorage.messages, data.messages);
		// 		newMessagesDump = newMessagesDump.sort((p, t) => p.id > t.id ? 1 : -1);
		//
		// 		this.chatStorage.messages = newMessagesDump;
		//
		// 	}
		//
		// });

	}

}