import ChatStorage from "@/storages/ChatStorage";
import UserStorage from "@/storages/UserStorage";
import AppStorage from "@/storages/AppStorage";

export default {
	data(){
		return {
			chatStorage : ChatStorage,
			userStorage : UserStorage,
			appStorage : AppStorage
		}
	}
}