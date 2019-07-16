const axios = require('axios');

export const increment = amount => {
	return {
		type: "INCREMENT_COUNTER",
		payload: amount
	};
};

export const toggleLoader = isLoading => {
	return {
		type: "SET_LOADER",
		payload: isLoading
	};
};



export const addMessage = message => {
	return {
		type: "ADD_MESSAGE",
		payload: message
	};
};

export const setMessages = messages => {
	return {
		type: "SET_MESSAGES",
		payload: messages
	};
};

export function getMessagesAsync() {
	return function(dispatch){
		dispatch(toggleLoader(true))
		return axios.get('http://localhost:3000/messages')
		.then(function (response) {
		  console.log("axios returns")
		  console.log(response.data);
		  dispatch(toggleLoader(false))
		  return dispatch(setMessages(response.data))
		})
	}
  }

export function postMessageAsync(message) {
return function(dispatch){
	console.log(message)
	return axios.post('http://localhost:3000/messages',message )
	.then(function (response) {
		console.log("axios returns")
		console.log(response.data);
		return dispatch(getMessagesAsync(response.data))
	}).catch(function (err) {
		console.log("errrror")
		console.log(err)
	})
}
}


export function clearMessageAsync(message) {
return function(dispatch){
	console.log(message)
	return axios.post('http://localhost:3000/clear')
	.then(function (response) {
		console.log("axios returns")
		console.log(response.data);
		return dispatch(getMessagesAsync(response.data))
	}).catch(function (err) {
		console.log("errrror")
		console.log(err)
	})
}
}

export const updateInput = val => {
	return { type: 'UPDATE_INPUT', payload: val }
}