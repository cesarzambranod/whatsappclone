import React from "react";
import { avatars } from "@/Utils/avatars";
import { Link } from "react-router-dom";
import { Check, CheckCheck } from "lucide-react";
import type Contact from "@/Model/Contact";

interface ContactProps {
  contact: Contact;
}

const Contacts: React.FC<ContactProps> = ({ contact }) => {
  const { id, nombre, thumbnail, mensajes } = contact;
  const imgSrc = avatars[thumbnail as keyof typeof avatars];
  const lastMessage = mensajes[mensajes.length - 1];
  const horaUltimoMensaje = lastMessage?.hora;
  const statusUltimoMensaje = lastMessage?.estado;

  // Function to get the icon based on status
  const getStatusIcon = () => {
    switch (statusUltimoMensaje) {
      case "visto":
        return <CheckCheck className="w-5 h-5 text-blue-500" />;
      case "entregado":
        return <CheckCheck className="w-5 h-5 text-gray-500" />;
      default:
        return <Check className="w-5 h-5 text-gray-500" />;
    }
  };

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
            {getStatusIcon()}
            <span className="ml-2">{lastMessage?.texto}</span>
          </div>
        </div>
        <div className="text-gray-500 text-sm">{horaUltimoMensaje}</div>
      </div>
    </Link>
  );
};

export default Contacts;
