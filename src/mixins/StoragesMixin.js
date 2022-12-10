import ChatStorage from "@/storages/ChatStorage";
import UserStorage from "@/storages/UserStorage";

export default {
	data(){
		return {
			chatStorage : ChatStorage,
			userStorage : UserStorage
		}
	}
}