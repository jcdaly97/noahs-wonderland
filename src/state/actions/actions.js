//import types
import { INPUT_SUCCESS, INPUT_FAILED, SESSION_SUCCESS, SESSION_FAILED, BOT_RESPONSE_SUCCESS, BOT_RESPONSE_FAILED } from './types'

//function to handle new user messages
export const newUserMessage = (message) => async (dispatch) => {
	try {
		dispatch({ type: INPUT_SUCCESS, payload: message })
	} catch (err) {
		dispatch({ type: INPUT_FAILED, payload: err })
	}
}

//function to send message to the chatbot

//function to start a session
