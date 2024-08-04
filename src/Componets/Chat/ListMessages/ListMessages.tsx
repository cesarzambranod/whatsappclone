import React, { useState, useEffect } from "react";
import Message from "@/Model/Message";
import Messages from "../Messages/Messages";
import useContactStore from "@/Store/useContactStore";
import "./ListMessages.css";

interface ListMessagesProps {
  mensaje?: Message;
  search?: string;
  contactoID? : string;
}

const ListMessages: React.FC<ListMessagesProps> = ({ mensaje, search, contactoID }) => {
  const { filteredContacts } = useContactStore();
  const [mensajesIniciales, setMensajesIniciales] = useState<Message[]>([]);

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
    <div className="listmessages flex flex-col overflow-scroll pt-20 pb-10">
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
