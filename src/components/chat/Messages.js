import { connect } from 'react-redux'

function Messages(chat) {
	console.log(chat)
	console.log(chat.messages.length)
	return (
		<>
			<div className='messages'>
				messages here
			</div>
			{chat.messages.length === 0 ? "" : chat.messages.map((msg) => <div>{msg.message}</div>)}
		</>
	)

}

const mapStateToProps = state => ({
	messages: state.chat.messages
})

export default connect(mapStateToProps)(Messages);