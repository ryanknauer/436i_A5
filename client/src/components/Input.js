import React from 'react';
import { connect } from "react-redux";
import { addMessage, postMessageAsync, clearMessageAsync} from "../actions";
import { updateInput } from "../actions";
import '../App.css'

class Input extends React.Component {
	render() {
		return (
        <form>
            <input id='name_input' type="text" name="messsage" placeholder="Name" onChange={event => this.props.updateInput(['name', event.target.value])}/> 
            <input id='m_input' type="text" name="messsage" placeholder="Message" onChange={event => this.props.updateInput(['text', event.target.value])}/>
            <button id="b1" onClick={() => this.props.postMessageAsync(this.props.inputs)} type="button">Add Message</button>
            <button id="clear-button" onClick={() => this.props.clearMessageAsync()} type="button">Clear All</button>
            {this.props.isLoading && this.loader()}
        </form>
        );
    }

    loader() {
        return (
            <div className="loader"></div>
        )
    }
}


const mapStateToProps = (state) => { //name is by convention
	//state has entire state of app!! 
    return { inputs: state.inputs,
             isLoading: state.isLoading }; //now it will appear as props
}

export default connect(mapStateToProps, {postMessageAsync, clearMessageAsync, updateInput})(Input); 
