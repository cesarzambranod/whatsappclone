import "./ChatScreens.css";
import { useState } from "react";
import Message from "@/Model/Message";
import { ChatHeader } from "@/Componets/Chat";
import { useParams } from "react-router-dom";
import { ListMessages } from "@/Componets/Chat/ListMessages";
import { NewMessageForm } from "@/Componets/Chat/NewMessageForm";
const ChatScreens = () => {
  const [mensajes, setMensajes] = useState<Message[]>([]);
  const [search, setSearch] = useState<string>("");
  const { contactoID } = useParams<{ contactoID: string }>();
  const handleNewMessage = (newMessageText: string) => {
    const newMessage: Message = {
      id: mensajes.length + 1,
      texto: newMessageText,
      autor: "Yo",
      estado: "entregado",
      dia: "hoy",
      hora: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMensajes([...mensajes, newMessage]);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  return (
      <div className="chatscreens">
        <ChatHeader
          search={search}
          onSearchChange={handleSearchChange}
          contactoID={contactoID!}
        />
        <div className="wallpaper">
          <ListMessages
            mensaje={mensajes[mensajes.length - 1]}
            search={search}
            contactoID={contactoID!}
          />
          <NewMessageForm handleNewMessage={handleNewMessage} />
        </div>
      </div>
  );
};

export default ChatScreens;
