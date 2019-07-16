import React from 'react';
import { connect } from "react-redux";
import { increment } from "../actions";
import Message from "./Message";

class Messages extends React.Component {
	render() {
		return (
	<ul id="messages">
		{this.props.messages.map((message, i) => (
	<Message key={i} message={message}/>
		))}
	</ul>);
	}
}

const mapStateToProps = (state) => { //name is by convention
	//state has entire state of app!! 
	return { messages: state.messages }; //now it will appear as props
}


export default connect(mapStateToProps, {increment})(Messages); 
