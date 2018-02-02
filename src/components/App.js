import React,{Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {bindActionCreators} from 'redux';
import {addReminder,deleteReminder} from '../actions';

class App extends Component{
	constructor(props){
		super(props);
		this.state={
			text:'',
			duedate:''
		}
		
	}
	addReminder(){
		console.log('this',this)
		this.props.addReminder(this.state.text,this.state.duedate);
	}
	deleteReminder(id){
		this.props.deleteReminder(id);
	}
	renderMyReminders(){
		const {myReminders}=this.props;
		return (
		<ul className='list-group col-sm-4'>
		{
			myReminders.map(reminder=>{
				return(
				<li key={reminder.id} className='list-group-item'>
				<div className='list-item'>
				<div>{reminder.text}</div>
				<div><em>{moment(new Date(reminder.duedate)).fromNow()}</em></div>
				</div>
			
				<div className='list-item delete-button'
				onClick={()=>this.deleteReminder(reminder.id)}
				>
				&#x2715;
				</div>
			
				</li>
				)
			})
		}
		</ul>
		)
	}
	render(){
		return(
		<div className='App'>
		<div className='title'> Reminder</div>
		<div className='form-inline'>
			<div className='form-group'>
				<input
				className='form-control'
				placeholder='Do ....'
				onChange={(e)=>this.setState({text:e.target.value})}
				/>
				
				<input
				className='form-control'
				type='datetime-local'
				onChange={(e)=>this.setState({duedate:e.target.value})}
				/>
			</div>
			<button

			type='button'
			className='btn btn-default'
			onClick={()=>this.addReminder()}
			>
			Add reminder
			</button>
			
		
		
		</div>
			{this.renderMyReminders()}
		</div>
		);
	}
}
function mapStateToProps(state){
	return {
		myReminders:state
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({addReminder,deleteReminder},dispatch);	
}

export default connect(mapStateToProps,mapDispatchToProps)(App);