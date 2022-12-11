<template>
    <section class="chat chat--fullscreen" v-if="appStorage.ready">
	    <template v-if="userStorage.isAuth">
		    <Dialogs class="chat__dialogs" />
		    <Messages class="chat__messages" v-if="chatStorage.selectedRoomId" />
	    </template>
	    <Auth class="chat__auth" v-else />
    </section>
</template>

<script>
import Dialogs from "@/components/Dialogs";
import Messages from "@/components/Messages";
import Auth from "@/components/Auth";
import AppMixin from "@/mixins/AppMixin";
import {io} from "socket.io-client";

export default {
  name: 'App',
  components: {
    Dialogs,
	Messages,
	Auth
  },
  mixins : [
	  AppMixin
  ]
}
</script>


<style>

body{
	background: #e5e5e5;
	font: 12px 'Roboto';
	line-height: 1;
}

* {
	scrollbar-width: thin;
	scrollbar-color: #ACB2B9 #E9E9E9;
}

*::-webkit-scrollbar {
	width: 4px;
}

*::-webkit-scrollbar-track {
	background: #E9E9E9;
}

*::-webkit-scrollbar-thumb {
	background-color: #ACB2B9;
	border-radius: 15px;
	border: 15px solid #ffffff;
}

.chat{
	background: white;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
}

.chat--fullscreen{
	width: 100vw;
	height: 100vh;
	max-width: 1440px;
}

.chat--mini{
	max-width: 920px;
	width: calc(100vw - 200px);
	height: calc(100vh - 200px);
	margin: 100px auto;
}

.chat__dialogs{
	width: 260px;
	height: 100%;
	flex-shrink: 0;
	border-right: 1px solid rgba(199, 207, 214, 0.25);
}

.chat__auth{
	width: 100%;
	height: 100%;
}

.chat__messages{
	height: 100%;
	width: 100%;
}

</style>
