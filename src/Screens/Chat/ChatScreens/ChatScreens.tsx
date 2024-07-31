import "./ChatScreens.css";
import { useState } from "react";
import Message from "@/Model/Message";
import  { ChatHeader } from "@/Componets/Chat";
import { useParams } from "react-router-dom";
import { ListMessages } from "@/Componets/Chat/ListMessages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
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
    <div className="chatscreens">
      <ChatHeader search={search} onSearchChange={handleSearchChange} contactoID= {contactoID!} />
      <QueryClientProvider client={queryClient}>
       <ListMessages mensaje={mensajes[mensajes.length - 1]} search={search} />
      </QueryClientProvider>
    </div>
  );
};

export default ChatScreens;

