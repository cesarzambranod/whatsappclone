import React from "react";
import { Check, CheckCheck } from "lucide-react";
import Message from '@/Model/Message';

interface MessageProps {
  message: Message;
}

const Messages: React.FC<MessageProps> = ({ message }) => {
  const { estado, autor, texto, hora } = message;

  const getStatusIcon = () => {
    switch (estado) {
      case "visto":
        return <CheckCheck className="w-4 h-4 text-blue-500" />;
      case "entregado":
        return <CheckCheck className="w-4 h-4 text-gray-500" />;
      default:
        return <Check className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div
      className={`inline-block max-w-[70%] p-3 rounded-lg m-3 ${
        autor === "Yo"
          ? "bg-green-100 text-right self-end"
          : "bg-gray-200 text-left"
      }`}
    >
      <p className="mensaje-texto font-semibold">{autor}</p>
      <p className="mensaje-texto">{texto}</p>
      <div className="mensaje-info text-sm text-gray-600 flex justify-end items-center">
        <span>{hora}</span>
        <span className="ml-2">{getStatusIcon()}</span>
      </div>
    </div>
  );
};

export default Messages;
