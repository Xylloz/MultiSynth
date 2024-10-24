import { useChatStore } from "@src/stores/chatStore";
import type { ChatboxProps } from "@src/types/ChatTypes";
import socket from "@utils/socket";
import { useEffect } from "react";
import ChatForm from "./ChatForm";
import ChatMessages from "./ChatMessages";

const Chatbox: React.FC<ChatboxProps> = ({ nickname }) => {
	const messages = useChatStore((state) => state.messages);
	const addMessage = useChatStore((state) => state.addMessage);

	useEffect(() => {
		socket.on("chat message", addMessage);

		return () => {
			socket.off("chat message", addMessage);
		};
	}, [addMessage]);

	const handleSendMessage = (content: string) => {
		console.log("client sent message");

		socket.emit("chat message", nickname, content);

		addMessage(nickname, content);
	};

	return (
		<div className="relative w-60 h-96 bg-foreground bg-opacity-50">
			<ChatMessages messages={messages} />
			<ChatForm onSendMessage={handleSendMessage} />
		</div>
	);
};

export default Chatbox;
