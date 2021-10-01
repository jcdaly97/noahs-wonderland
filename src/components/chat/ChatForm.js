import React, { useState } from 'react';

function ChatForm(props) {
	return (
		<>
			<label>
				Say Something:
				<input type='text' />
			</label>
			<input type="submit" value='Submit' />
		</>
	)
}

export default ChatForm;