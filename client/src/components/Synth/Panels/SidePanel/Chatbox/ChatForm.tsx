import type { ChatFormProps } from "@src/types/ChatTypes";
import { useState } from "react";

const ChatForm: React.FC<ChatFormProps> = ({ onSendMessage }) => {
	const [message, setMessage] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (message.trim()) {
			onSendMessage(message);
			setMessage("");
		}
	};

	return (
		<form
			className="flex flex-rows absolute bottom-0 w-full border-2 rounded-md bg-foreground"
			onSubmit={handleSubmit}
		>
			<input
				className="w-full bg-foreground text-white"
				type="text"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				placeholder="Type a message..."
			/>
			<button className="w-24 text-white" type="submit">
				Send
			</button>
		</form>
	);
};

export default ChatForm;
