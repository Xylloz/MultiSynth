import { useState, useEffect } from "react";
import socket from "@utils/socket";
import ChatForm from "./ChatForm";
import ChatMessages from "./ChatMessages";
import { ChatMessage, ChatboxProps } from "@src/types/ChatTypes";

const Chatbox: React.FC<ChatboxProps> = ({ nickname }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: "System", content: "Welcome to MultiSynth!" },
  ]);

  useEffect(() => {
    const handleChatMessage = (sender: string, content: string) => {
      setMessages((prevMessages) => [...prevMessages, { sender, content }]);
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
      { sender: nickname, content: msg },
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
