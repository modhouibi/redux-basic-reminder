import {ADD_REMINDER} from '../constants';

const reminderHelper=(action)=>{
	return {
		text:action.text,
		id:Math.random()
	}
}

const reminders=(state=[],action)=>{
	
	let reminders=null;
	switch(action.type){
		
		case ADD_REMINDER:
		reminders=[...state,reminderHelper(action)]
		console.log('reminders as state',reminders);
		return reminders;
		
		default:
		return state;
	
	}
}
export default reminders;