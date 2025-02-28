import React from "react";
import { useState, useContext, useEffect } from "react";
import { chatContext } from "../Context/Context";

const Navigation = () => {
  const context = useContext(chatContext);
  const [elements, setElements] = useState(
    JSON.parse(localStorage.getItem("Chats")) || ["Initial Chat"]
  );

  useEffect(() => {
    setElements(context.Chats);
  }, [context.Chats]);

  return (
    <div className="bg-black text-white w-1/5 h-screen relative">
      <div className="logo flex gap-1 w-fit text-4xl mx-auto my-4">
        <span className="material-symbols-outlined pt-1 large-logo-icon text-purple-900">
          robot
        </span>
        <span className="pb-1">ChatBot</span>
      </div>
      <div className="previous-chats px-4 text-center">
        <h2 className="text-neutral-500">Previous Conversations</h2>
        <div>
          {elements.map((chat, index) => {
            return (
              <div
                key={index}
                className="py-2 mx-3 cursor-pointer rounded-4xl hover:bg-violet-900"
                onClick={() => context.setCurrentChat(chat)}
              >
                {chat}
              </div>
            );
          })}
        </div>
      </div>
      <button
        type="button"
        className="absolute bottom-8 right-1/6 left-1/6 bg-violet-900 p-2 rounded-4xl cursor-pointer"
        onClick={() => context.setIsNewChat(true)}
      >
        New Conversation
      </button>
    </div>
  );
};

export default Navigation;
