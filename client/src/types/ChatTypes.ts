export interface ChatMessage {
	sender: string;
	content: string;
	timestamp: number;
}

export interface ChatboxProps {
	nickname: string;
}

export interface ChatMessagesProps {
	messages: ChatMessage[];
}

export interface ChatFormProps {
	onSendMessage: (message: string) => void;
}
