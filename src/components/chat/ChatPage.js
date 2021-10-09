import ChatForm from "./ChatForm";
import Messages from "./Messages";

function ChatPage() {
	return (
		<div className='chat-page'>

			<div className='chat-widget'>
				<Messages />
				<ChatForm />
			</div>

		</div>
	)
}

export default ChatPage;
