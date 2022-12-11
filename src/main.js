import { createApp } from 'vue'
import App from './App.vue'
import StoragesMixin from "@/mixins/StoragesMixin";
import {io} from "socket.io-client";
import Popup from "@/components/Inrerface/Popup";
import Modal from "@/components/Inrerface/Modal";



let app = createApp(App);

app.component(Popup)
app.component(Modal);

app.mixin(StoragesMixin);

app.mount('#app');
