import { createApp } from 'vue'
import App from './App.vue'
import ChatStorage from "@/storages/ChatStorage";
import UserStorage from "@/storages/UserStorage";

createApp(App)
	.mixin({
		data(){
			return {
				$chatStorage : ChatStorage,
				$userStorage : UserStorage
			}
		}
	})
	.mount('#app')
