import React from "react";
import { avatars, Avatars } from "@/utils/avatars";
import { Link } from "react-router-dom";
import checkIcon from "@/assets/icons/check.svg";
import doubleCheckIcon from "@/assets/icons/doublecheck.svg";
import doubleCheckBlueIcon from "@/assets/icons/doublecheckblue.svg";

interface Message {
  texto: string;
  hora: string;
  estado: "visto" | "entregado" | "no_entregado";
}

interface ContactProps {
  contact: {
    id: string;
    nombre: string;
    thumbnail: keyof Avatars;
    mensajes: Message[];
  };
}

const Contact: React.FC<ContactProps> = ({ contact }) => {
  const { id, nombre, thumbnail, mensajes } = contact;
  const imgSrc = avatars[thumbnail];
  const lastMessage = mensajes[mensajes.length - 1];
  const horaUltimoMensaje = lastMessage?.hora;
  const statusUltimoMensaje = lastMessage?.estado;

  return (
    <Link className="block text-gray-900" to={`/mensajes/${id}`}>
      <div className="flex items-center p-3 border-b border-gray-200 hover:bg-gray-100">
        <img
          className="w-12 h-12 rounded-full mr-3"
          src={imgSrc}
          alt={nombre}
        />
        <div className="flex-1">
          <p className="text-lg font-semibold">{nombre}</p>
          <div className="flex items-center text-gray-600">
            <img
              className="w-5 h-5 mr-2"
              src={
                statusUltimoMensaje === "visto"
                  ? doubleCheckBlueIcon
                  : statusUltimoMensaje === "entregado"
                  ? doubleCheckIcon
                  : checkIcon
              }
              alt={statusUltimoMensaje}
            />
            <span>{lastMessage?.texto}</span>
          </div>
        </div>
        <div className="text-gray-500 text-sm">{horaUltimoMensaje}</div>
      </div>
    </Link>
  );
};

export default Contact;
