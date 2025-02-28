import React from "react";
import { useState, useContext } from "react";
import { chatContext } from "../Context/Context";

const NewChat = () => {
  const [value, setValue] = useState("");
  const context = useContext(chatContext);
  const SetNewChat = () => {
    let words = value.trim().split(/\s+/);
    if (words.length > 3) {
      var shortenedValue = words.slice(0, 3).join(" ").concat("...");
      setValue(shortenedValue);
    } else {
      var shortenedValue = value;
    }
    context.setNewChatTitle(shortenedValue);
    context.setIsNewChat(false);
  };

  return (
    <>
      <div className="flex items-center justify-center backdrop-blur-sm w-screen h-full absolute top-0">
        <div className="h-1/5 w-1/2 bg-neutral-900 rounded-2xl">
          <div className="flex justify-between p-4 text-neutral-200">
            <h1 className="text-xl">Start new conversation</h1>
            <button className="cursor-pointer" onClick={() => context.setIsNewChat(false)}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="flex justify-between mx-4 mt-6">
            <input
              className="w-3/4 p-2 bg-neutral-800 rounded-2xl text-xl text-neutral-200 outline-purple-900"
              type="text"
              value={value}
              placeholder="New chat title"
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              type="submit"
              className="py-2 px-6 rounded-2xl bg-purple-900 text-xl text-neutral-200 cursor-pointer"
              onClick={SetNewChat}
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewChat;
