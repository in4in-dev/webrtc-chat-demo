import { createApp } from 'vue'
import App from './App.vue'
import StoragesMixin from "@/mixins/StoragesMixin";
import {io} from "socket.io-client";

let socket = io('ws://localhost:3000', {
	path : '/',
	transports : ['websocket']
});

createApp(App)
	.mixin(StoragesMixin)
	.mixin({
		data(){
			return {
				socket
			}
		}
	})
	.mount('#app')
