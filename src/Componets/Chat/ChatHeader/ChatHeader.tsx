import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Video, Phone, MoreVertical } from "lucide-react";
import useContactStore from "@/Store/useContactStore";
import { avatars } from "@/Utils/avatars";
import Contact from "@/Model/Contact";
import { FormSerchMessage } from "../FormSerchMessage";
import "./ChatHeader.css";

interface ChatHeaderProps {
  search: string;
  onSearchChange: (value: string) => void;
  contactoID: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ search, onSearchChange, contactoID }) => {
  const { filteredContacts } = useContactStore();
  const [contacto, setContacto] = useState<Contact | null>(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  useEffect(() => {
    const contactoEncontrado = filteredContacts.find(
      (contacto) => contacto.id === parseInt(contactoID)
    );
    if (contactoEncontrado) {
      setContacto(contactoEncontrado);
    }
  }, [contactoID, filteredContacts]);

  const imgSrc = contacto
    ? avatars[contacto.thumbnail as keyof typeof avatars]
    : "";

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <div className={`chat-header ${searchVisible ? "search-visible" : ""} flex items-center justify-between bg-green-600 p-4 shadow-md rounded-t-lg`}>
      {searchVisible && (
        <FormSerchMessage search={search} onSearchChange={onSearchChange} />
      )}
      
      <Link to="/contacts" className="text-white">
        <ArrowLeft className="arrow w-6 h-6" />
      </Link>
      {contacto && (
        <Link to={`/contactInfo/${contacto.id}`} className="contacto flex items-center ml-3 text-white">
          <img
            src={imgSrc}
            alt={contacto.nombre}
            className="w-10 h-10 rounded-full"
          />
          <div className="contact-info ml-3">
            <div className="contact-name font-medium text-lg">{contacto.nombre}</div>
            <div className="contact-status text-sm">Online</div>
          </div>
        </Link>
      )}
      <div className="iconos flex items-center space-x-3 ml-auto text-white relative">
        <Video className="w-6 h-6 cursor-pointer" />
        <Phone className="w-6 h-6 cursor-pointer" />
        <MoreVertical onClick={toggleMenu} className="w-6 h-6 cursor-pointer" />
        {menuVisible && (
          <div className="context-menu absolute right-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
            <Link
              to={`/contactInfo/${contacto?.id}`}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Ver Contacto
            </Link>
            <button
              onClick={() => {
                handleSearchClick();
                toggleMenu();
              }}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Buscar
            </button>
            <Link
              to="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Silenciar
            </Link>
            <Link
              to="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Mensajes temporales
            </Link>
            <Link
              to="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Más opciones
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatHeader;
