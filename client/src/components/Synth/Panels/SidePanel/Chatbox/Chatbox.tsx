import type { ChatMessage, ChatboxProps } from "@src/types/ChatTypes";
import socket from "@utils/socket";
import { useEffect, useState } from "react";
import ChatForm from "./ChatForm";
import ChatMessages from "./ChatMessages";

const Chatbox: React.FC<ChatboxProps> = ({ nickname }) => {
	const [messages, setMessages] = useState<ChatMessage[]>([
		{
			sender: "System",
			content: "Welcome to MultiSynth!",
			timestamp: Date.now(),
		},
	]);

	useEffect(() => {
		const handleChatMessage = (
			sender: string,
			content: string,
			timestamp: number,
		) => {
			setMessages((prevMessages) => [
				...prevMessages,
				{ sender, content, timestamp },
			]);
		};

		socket.on("chat message", handleChatMessage);

		return () => {
			socket.off("chat message", handleChatMessage);
		};
	}, []);

	const handleSendMessage = (msg: string) => {
		console.log("client sent message");

		socket.emit("chat message", nickname, msg);

		setMessages((prevMessages) => [
			...prevMessages,
			{ sender: nickname, content: msg, timestamp: Date.now() },
		]);
	};

	return (
		<div className="relative w-60 h-96 bg-foreground bg-opacity-50">
			<ChatMessages messages={messages} />
			<ChatForm onSendMessage={handleSendMessage} />
		</div>
	);
};

export default Chatbox;
