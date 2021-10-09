import { connect } from 'react-redux'

function Messages(chat) {
	console.log(chat)
	console.log(chat.messages.length)
	return (
		<div className='message-queue'>
			{chat.messages.length === 0 ? <div>start chatting</div> : chat.messages.map((msg) =>
				<div className={msg.type}>{msg.message}</div>)
			}
		</div>
	)

}

const mapStateToProps = state => ({
	messages: state.chat.messages
})

export default connect(mapStateToProps)(Messages);