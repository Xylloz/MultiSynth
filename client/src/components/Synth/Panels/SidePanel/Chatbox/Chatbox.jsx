import React, { useState, useEffect } from "react";
import socket from "../../../../../utils/socket";
import ChatForm from "./ChatForm";
import ChatMessages from "./ChatMessages";

const Chatbox = ({ nickname }) => {
  const [messages, setMessages] = useState(['Welcome to MultiSynth!']);

  useEffect(() => {
    // Message listener
    socket.on("chat message", (nickname, msg) => {
      setMessages((prevMessages) => [...prevMessages, `${nickname}: ${msg}`]);
    });

    return () => {
      socket.off("chat message");
    };
  }, []);

  const handleSendMessage = (msg) => {
    console.log("client sent message");
    socket.emit("chat message", nickname, msg);
    setMessages((prevMessages) => [...prevMessages, `${nickname}: ${msg}`]);
  };
  return (
    <div className="relative w-60 h-96 bg-foreground bg-opacity-50">
      <ChatMessages messages={messages} />
      <ChatForm onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chatbox;
