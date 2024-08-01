import React, { useState, FormEvent } from "react";
import { Send } from "lucide-react";

interface NewMessageFormProps {
  handleNewMessage: (mensaje: string) => void;
}

const NewMessageForm: React.FC<NewMessageFormProps> = ({ handleNewMessage }) => {
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleNewMessage(mensaje);
    setMensaje("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-0 left-0 right-0 p-2 flex items-center shadow-md"
    >
      <input
        type="text"
        placeholder="Mensaje"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded-full mr-2"
      />
      <button
        type="submit"
        className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
      >
        <Send className="w-6 h-6" />
      </button>
    </form>
  );
};

export default NewMessageForm;
