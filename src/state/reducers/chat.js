//import types
import { INPUT_SUCCESS, INPUT_FAILED } from '../actions/types'

//set initial state
const initialState = {
	messages: []
}
//switch to update state
export default (state = initialState, action) => {
	const { type, payload } = action
	let { messages } = state;

	switch (type) {
		case INPUT_SUCCESS:
			messages = [...messages, { message: payload, type: 'user' }]
			return {
				...state,
				messages
			}
		case INPUT_FAILED:
			console.log(payload)
			return {
				...state
			}
	}
}