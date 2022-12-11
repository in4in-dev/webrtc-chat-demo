import { createApp } from 'vue'
import App from './App.vue'
import StoragesMixin from "@/mixins/StoragesMixin";
import Icon from "@/components/Inrerface/Icon";
import Autosize from "@/directives/Autosize";



let app = createApp(App);

app.use(Autosize);

app.component('Icon', Icon);

app.mixin(StoragesMixin);

app.mount('#app');
