export default {

	created(){

		this.socket.on('on.user.authorized', data => {

			if(data.success){
				this.userStorage.isAuth = true;
				this.userStorage.user = data.user;
				this.chatStorage.dialogs = data.dialogs;
			}else{
				alert('Auth error');
			}

		});

		this.socket.on('on.chat.history', data => {

			if(this.chatStorage.selectedRoomId === data.room.id){

				let newMessagesDump = [].concat(this.chatStorage.messages, messages);
				newMessagesDump = newMessagesDump.sort((p, t) => p.id > t.id ? 1 : -1);

				this.chatStorage.messages = newMessagesDump;

			}

		});

	}

}