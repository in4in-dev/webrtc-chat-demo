<template>
    <section class="chat">
	    <template v-if="userStorage.isAuth">
		    <Dialogs class="chat__dialogs" />
		    <Messages class="chat__messages" v-if="chatStorage.selectedDialog" />
	    </template>
	    <Auth class="chat__auth" v-else />
    </section>
</template>

<script>
import Dialogs from "@/components/Dialogs";
import Messages from "@/components/Messages";
import Auth from "@/components/Auth";
import AppMixin from "@/mixins/AppMixin";

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
	max-width: 920px;
	width: calc(100vw - 200px);
	height: calc(100vh - 200px);
	margin: 100px auto;
	background: white;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
}

.chat__dialogs{
	width: 260px;
	flex-shrink: 0;
	border-right: 1px solid rgba(199, 207, 214, 0.25);
}

.chat__auth{
	width: 100%;
}

.chat__messages{
	width: 100%;
}

</style>
