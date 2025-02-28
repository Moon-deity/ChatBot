import { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import Chat from "./Components/Chat";
import { chatContext } from "./Context/Context";
import NewChat from "./Components/NewChat";

function App() {
  const [Chats, setChats] = useState(() => {
    const storedChats = JSON.parse(localStorage.getItem("Chats"));
    return storedChats ? storedChats : ["First Chat"];
  });
  const [HistoryArray, setHistoryArray] = useState([]);
  const [CurrentChat, setCurrentChat] = useState("First Chat");
  const [NewChatTitle, setNewChatTitle] = useState("");
  const [IsNewChat, setIsNewChat] = useState(false);

  useEffect(() => {
    if (NewChatTitle !== "") {
      setChats((prevChats) => [...prevChats, NewChatTitle]);
      setCurrentChat(NewChatTitle);
      setNewChatTitle("");
    }
  }, [NewChatTitle]);

  useEffect(() => {
    if (Chats && Chats.length > 0) {
      localStorage.setItem("Chats", JSON.stringify(Chats));
    }
  }, [Chats]);

  useEffect(() => {
    const history = localStorage.getItem(CurrentChat);
    if (history) {
      setHistoryArray(JSON.parse(history));
    } else {
      setHistoryArray([]);
    }
  }, [CurrentChat]);

  useEffect(() => {
    const saveHistory = () => {
      if (CurrentChat && HistoryArray.length > 0) {
        localStorage.setItem(CurrentChat, JSON.stringify(HistoryArray));
      }
    };
    const timeoutId = setTimeout(saveHistory, 100);
    return () => clearTimeout(timeoutId);
  }, [HistoryArray, CurrentChat]);

  return (
    <chatContext.Provider
      value={{
        Chats,
        setChats,
        CurrentChat,
        setCurrentChat,
        IsNewChat,
        setIsNewChat,
        NewChatTitle,
        setNewChatTitle,
        HistoryArray,
        setHistoryArray,
      }}
    >
      <>
        <div className="interface flex">
          <Navigation />
          <Chat />
        </div>
        {IsNewChat && <NewChat />}
      </>
    </chatContext.Provider>
  );
}

export default App;
