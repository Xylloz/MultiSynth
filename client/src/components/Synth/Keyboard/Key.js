import React, { useState, useEffect } from "react";
import socket from "../../../utils/socket";

const Key = ({ note, isPlaying, isFlat, onPress, onRelease }) => {
  const [isKeyDown, setIsKeyDown] = useState(false);
  useEffect(() => {
    // Dismount
    return () => {};
  }, []);
  const keyDown = () => {
    if (isPlaying) {
      // come back later
    }
    setIsKeyDown(true);
    onPress(note);
  };
  const keyUp = () => {
    if (isKeyDown) {
      onRelease(note);
      setIsKeyDown(false);
    }
  };
  return (
    <div
      className={`flex flex-col justify-end flex-shrink-0 select-none items-center border text-gray-950 border-black ${
        isFlat ? "relative bg-black h-20 w-5 -mx-2.5" : "bg-white h-32 w-8"
      }`}
      onMouseDown={keyDown}
      onMouseUp={keyUp}
      // onMouseEnter={keyDown}
      onMouseLeave={keyUp}
    >
      {isFlat ? "" : note}
    </div>
  );
};

export default Key;
