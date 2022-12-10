<template>
	<form class="auth" @submit.prevent="onSubmit" action="" method="post">
		<div class="auth__title">Авторизация</div>
		<select @change="onUserSelect" required>
			<option selected>Выберите пользователя</option>
			<option :value="user.id" v-for="user in users" :key="user.id">{{ user.name }}</option>
		</select>
		<button type="submit" :disabled="!selectedUser">Войти</button>
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

<style scoped>

</style>