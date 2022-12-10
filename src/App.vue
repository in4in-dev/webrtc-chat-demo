<template>
    <section class="chat">
	    <template v-if="userStorage.isAuth">
		    <Dialogs />
		    <Messages v-if="chatStorage.selectedDialog" />
	    </template>
	    <Auth v-else />
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

