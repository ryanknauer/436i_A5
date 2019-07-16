import React from 'react';


class Message extends React.Component {
    constructor() {
        super()
        this.state = {
            isExpanded: false
        }
    }
    render() {
		return (
		<li>
            <span className='message_span' onClick={this.toggleExpanded.bind(this)}>{this.props.message.text}</span>
            {this.state.isExpanded && this.Detail()}
        </li>
        );
    }
    
    toggleExpanded() {
        this.setState({
            isExpanded: !this.state.isExpanded
        })
    }

   Detail() {
       return (
          
            <span className='name_span'>From: {this.props.message.name}</span>
       
       );
   } 
}


export default Message;
