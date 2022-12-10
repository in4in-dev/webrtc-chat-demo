<template>
    <section class="chat">
	    <Dialogs />
	    <Messages />
    </section>
</template>

<script>
import Dialogs from "@/components/Dialogs";

export default {
  name: 'App',
  components: {
    Dialogs
  }
}
</script>

