import type { ChatMessage } from "@src/types/ChatTypes";
import { create } from "zustand";

interface ChatStore {
	messages: ChatMessage[];
	addMessage: (sender: string, content: string) => void;
	clearMessages: () => void;
}

export const useChatStore = create<ChatStore>()((set) => ({
	messages: [],
	addMessage: (sender, content) => {
		const message: ChatMessage = {
			sender,
			content,
			timestamp: Date.now(),
		};
		set((state) => ({
			messages: [...state.messages, message],
		}));

		// socket.emit("chat message", { sender, content });
	},
	clearMessages: () => set({ messages: [] }),
}));
