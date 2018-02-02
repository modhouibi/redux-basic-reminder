import {ADD_REMINDER,DELETE_REMINDER} from '../constants';

export const addReminder=(text,duedate)=>{
	
	const action={
		type:ADD_REMINDER,
		text,
		duedate
	}
	console.log('action in addReminder',action);
	return action;
}

export const deleteReminder=(id)=>{
	const action={
		type:DELETE_REMINDER,
		id
	}
	return action;
}