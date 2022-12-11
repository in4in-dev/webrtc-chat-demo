import {reactive} from "vue";

export default reactive({
	dialogs : [],
	selectedRoomId : null,
	messages : [],
	users : [
		{
			id : 1,
			name : 'First user',
			token : 'token'
		},
		{
			id : 2,
			name : 'Second user',
			token : 'token2'
		},
		{
			id : 3,
			name : 'Third user',
			token : 'token3'
		}
	]
});