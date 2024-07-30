import { useState } from "react";
import Message from "@/Model/Message";
import  { ChatHeader } from "@/Componets/Chat";
import "./ChatScreens.css";
import { useParams } from "react-router-dom";



const ChatScreens = () => {
  const [mensajes, setMensajes] = useState<Message[]>([]);
  const [search, setSearch] = useState<string>("");
  const { contactoID } = useParams<{ contactoID: string }>();
  // Function to handle new message
  const handleNewMessage = (newMessage: string) => {
    const nuevoMensaje: Message = {
      id: mensajes.length + 1,
      texto: newMessage,
      autor: "yo",
      estado: "entregado",
      dia: "hoy",
      hora: new Date().toLocaleTimeString(),
    };
    setMensajes([...mensajes, nuevoMensaje]);
  };

  // Function to handle search input change
  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  return (
    <div className="chat-screens">
      <ChatHeader search={search} onSearchChange={handleSearchChange} contactoID= {contactoID} />
      {/* <ListaMensajes
        contactoID={contactoID}
        message={mensajes[mensajes.length - 1]}
        search={search}
      />
      <NuevoMensajeForm handleSubmitNewMessage={handleNewMessage} /> */}
    </div>
  );
};

export default ChatScreens;

