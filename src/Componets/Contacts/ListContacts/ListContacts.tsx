import React, { useEffect } from "react";
import { Contact as ContactComponent } from "../Contact";
import { Avatars } from "@/utils/avatars";
import { useMessages } from "@/Hooks/useMessages";
import useContactStore from "@/Store/useContactStore";

interface Message {
  texto: string;
  hora: string;
  estado: "visto" | "entregado" | "no_entregado";
}

interface Contact {
  id: string;
  nombre: string;
  thumbnail: keyof Avatars;
  mensajes: Message[];
}

interface ListContactsProps {
  search: string;
}

const ListContacts: React.FC<ListContactsProps> = ({ search }) => {
  const { data, error, isLoading } = useMessages();
  const { filteredContacts, setContacts, setSearch } = useContactStore();

  useEffect(() => {
    if (data) {
      const formattedContacts: Contact[] = data.map((group) => ({
        id: group.id.toString(),
        nombre: group.nombre,
        thumbnail: group.thumbnail as keyof Avatars,
        mensajes: group.mensajes.map((message) => ({
          texto: message.texto,
          hora: message.hora,
          estado: message.estado as "visto" | "entregado" | "no_entregado",
        })),
      }));
      setContacts(formattedContacts);
    }
  }, [data, setContacts]);

  useEffect(() => {
    setSearch(search);
  }, [search, setSearch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4 space-y-2">
      {filteredContacts.map((contact) => (
        <ContactComponent key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ListContacts;
