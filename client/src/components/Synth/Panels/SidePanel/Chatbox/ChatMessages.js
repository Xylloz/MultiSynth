import React from "react";

const ChatMessages = ({ messages }) => {
  console.log("Chat Messages: ", messages);
  return (
    <ul className="list-none overflow-visible m-0 p-0 [&>*:nth-child(odd)]:bg-foreground [&>*:nth-child(even)]:bg-background">
      {messages.map((message, index) => (
        <li key={index} className="py-2 px-4 text-white">
          {message}
        </li>
      ))}
    </ul>
  );
};

export default ChatMessages;
