import ChatForm from "./ChatForm";
import Messages from "./Messages";

function ChatPage() {
	return (
		<div className='chat-widget'>
			<Messages />
			<ChatForm />
		</div>
	)
}

export default ChatPage;
