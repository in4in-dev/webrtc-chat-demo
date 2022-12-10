<template>
	<form class="auth" @submit.prevent="onSubmit" action="" method="post">
		<div class="auth__title">Авторизация</div>
		<select @change="onUserSelect" required class="auth__select">
			<option selected>Выберите пользователя</option>
			<option :value="user.id" v-for="user in users" :key="user.id">{{ user.name }}</option>
		</select>
		<button type="submit" :disabled="!selectedUser" class="auth__button">Войти</button>
	</form>
</template>

<script>
export default {
	name: "Auth",
	data(){
		return {
			selectedUser : null,
			users : [
				{
					id : 1,
					name : 'First user',
					token : 'token'
				},
				{
					id : 2,
					name : 'Second user',
					token : 'token2'
				},
				{
					id : 3,
					name : 'Third user',
					token : 'token3'
				}
			]
		}
	},
	methods : {
		onUserSelect(e){
			this.selectedUser = e.target.value ? this.users.find(u => u.id === +e.target.value) : null;
		},
		onSubmit(){

			if(this.selectedUser){

				this.socket.emit('user.auth', {
					id : this.selectedUser.id,
					token : this.selectedUser.token
				});

			}

		}
	}
}
</script>

<style>

.auth{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
}

.auth__title{
	font-size: 30px;
	margin-bottom: 20px;
	font-weight: 100;
}

.auth__select{
	margin-bottom: 20px;
	background: white;
	border: 1px solid #d7d7d7;
	padding: 10px 20px;
	font-size: 16px;
	min-width: 300px;
	border-radius: 30px;
	transition: border 0.3s;
	cursor: pointer;
}

.auth__select:hover,
.auth__select:focus{
	border-color: #4776d0;
}

.auth__button{
	font-size: 21px;
	color: white;
	background: #5A8DEE;
	padding: 13px 20px;
	text-align: center;
	min-width: 300px;
	border-radius: 100px;
	font-weight: 300;
	transition: background 0.3s;
	cursor: pointer;
}

.auth__button:hover{
	background: #4776d0;
}

</style>