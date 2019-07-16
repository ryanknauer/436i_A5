import {combineReducers} from "redux";

const defaultMessages = []//[{name:'ryan', text: 'hello world'}, {name:'carl', text: 'hello ryan'}]
const defaultInputs = {name:'', text: ''}

const counterReducer = (count = 0, action) => {
	if (action.type === "INCREMENT_COUNTER") {
		return count + action.payload;
	}
	return count;
};

const loaderReducer = (isLoading = false, action) => {
	if (action.type === "SET_LOADER") {
		return action.payload;
	} 
	return isLoading;
};


const messagesReducer = (messages = defaultMessages, action) => {
	if (action.type === "ADD_MESSAGE") {
		return [...messages, action.payload]
	} else if (action.type === "SET_MESSAGES") {
		return [...action.payload]
	}
	return messages;
};

const inputReducer = (inputs = defaultInputs, action) => {
	if (action.type === "UPDATE_INPUT") {
		const field = action.payload[0];
		const value = action.payload[1];
		return {...inputs, [field]:value};
	}
	return inputs;
};


export default combineReducers({
	count: counterReducer,
	messages: messagesReducer,
	inputs: inputReducer,
	isLoading: loaderReducer
})
