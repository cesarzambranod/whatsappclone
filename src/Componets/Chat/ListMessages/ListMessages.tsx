import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Message from "@/Model/Message";
import Contact from "@/Model/Contact";
import Messages from "../Messages/Messages";
import { useMessages } from "@/Hooks/useMessages";
import useContactStore from "@/Store/useContactStore";
import "./ListMessages.css"

interface ListMessagesProps {
  mensaje?: Message;
  search?: string;
}

const ListMessages: React.FC<ListMessagesProps> = ({ mensaje, search }) => {
  const { contactoID } = useParams<{ contactoID: string }>();
  const { data, error, isLoading } = useMessages();
  const { filteredContacts, setContacts } = useContactStore();

  const [mensajesIniciales, setMensajesIniciales] = useState<Message[]>([]);

  useEffect(() => {
    if (data) {
      const formattedContacts: Contact[] = data.map((group) => ({
        id: Number(group.id),
        nombre: group.nombre,
        thumbnail: group.thumbnail,
        mensajes: group.mensajes.map((message) => ({
          id: Number(message.id),
          texto: message.texto,
          hora: message.hora,
          estado: message.estado as "visto" | "entregado" | "no_entregado",
          autor: message.autor,
          dia: message.dia,
        })),
      }));
      setContacts(formattedContacts);
    }
  }, [data, setContacts]);

  useEffect(() => {
    if (mensaje) {
      setMensajesIniciales((mensajesPrevios) => [...mensajesPrevios, mensaje]);
    }
  }, [mensaje]);

  useEffect(() => {
    if (filteredContacts.length > 0 && contactoID) {
      const contactoEncontrado = filteredContacts.find(
        (contacto) => contacto.id === parseInt(contactoID)
      );
      if (contactoEncontrado) {
        setMensajesIniciales(contactoEncontrado.mensajes);
      }
    }
  }, [filteredContacts, contactoID]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const highlightSearch = (texto: string, search: string | undefined) => {
    if (!search) return texto;

    const words = texto.split(new RegExp(`(${search})`, "gi"));
    return words.map((word, index) =>
      word.toLowerCase() === search.toLowerCase() ? (
        <span key={index} className="bg-yellow-200">
          {word}
        </span>
      ) : (
        word
      )
    );
  };

  return (
    <div className="flex flex-col overflow-scroll h-screen listmessages">
      {mensajesIniciales.map((msj, index) => (
        <Messages
          message={{
            ...msj,
            texto: highlightSearch(msj.texto as string, search),
          }}
          key={`${contactoID}.${msj.id}.${index}`}
        />
      ))}
    </div>
  );
};

export default ListMessages;
