import React, { useState } from "react";

const ChatForm = ({ onSendMessage }) => {
  const [msgInput, setMsgInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (msgInput) {
      onSendMessage(msgInput);
      setMsgInput("");
    }
  };

  return (
    <form className="flex flex-rows absolute bottom-0 w-full border-2 rounded-md bg-foreground" onSubmit={handleSubmit}>
      <input
        className="w-full bg-foreground text-white"
        type="text"
        value={msgInput}
        onChange={(e) => setMsgInput(e.target.value)}
        placeholder="Message"
      />
      <button className="w-24 text-white" type="submit">Send</button>
    </form>
  );
};

export default ChatForm;
