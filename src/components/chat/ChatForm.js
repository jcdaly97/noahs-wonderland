import React, { useState } from 'react';
import { newUserMessage } from '../../state/actions/actions';
import { connect } from 'react-redux'

function ChatForm(chat) {
	const [newMessage, setNewMessage] = useState('');

	const handleSubmit = async (e) => {
		//get the code from the current key press
		const code = e.keyCode || e.which

		//if the code is 13 (enter) then submit the message
		if (code === 13) {
			console.log(newMessage)
			//dispatch action
			chat.newUserMessage(newMessage)
			//reset form state
			setNewMessage('')
		}

	}

	return (
		<>
			<label>
				Say Something:
				<input
					id='chat-input'
					onChange={(e) => setNewMessage(e.target.value)}
					onKeyPress={handleSubmit}
					value={newMessage}
				/>
			</label>
		</>
	)
}

export default connect(null, { newUserMessage })(ChatForm);