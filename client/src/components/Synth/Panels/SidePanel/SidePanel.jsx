import React from "react";
import Chatbox from "./Chatbox/Chatbox";
import Oscilloscope from "./Oscilloscope";

const SidePanel = ({ synth, nickname, exportHandler }) => {
  return (
    <div className="flex flex-col items-center flex-grow">
      <Oscilloscope synth={synth} exportHandler={exportHandler} />
      <Chatbox nickname={nickname} />
    </div>
  );
};

export default SidePanel;
