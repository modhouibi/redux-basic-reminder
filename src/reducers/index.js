import {ADD_REMINDER,DELETE_REMINDER} from '../constants';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies'

const reminderHelper=(action)=>{
	return {
		text:action.text,
		duedate:action.duedate,
		id:Math.random()
	}
}

const reminders=(state=[],action)=>{
	
	let reminders=null;
	state=read_cookie('reminders')
	switch(action.type){
		
		case ADD_REMINDER:
		reminders=[...state,reminderHelper(action)]
		
		bake_cookie('reminders',reminders)
		return reminders;
		
		case DELETE_REMINDER:
		console.log('ffffffff')
		const IndexToDelete=[...state].findIndex(reminder=>reminder.id===action.id)
		reminders=[...state.slice(0,IndexToDelete),...state.slice(IndexToDelete+1)]
		bake_cookie('reminders',reminders)
		return reminders;
		
		default:
		return state;
	
	}
}
export default reminders;