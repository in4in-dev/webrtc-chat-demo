import {reactive} from "vue";

export default class Storage
{

	constructor() {
		this.store = this.createStorage();
	}

	createStorage(){
		return reactive({});
	}

}