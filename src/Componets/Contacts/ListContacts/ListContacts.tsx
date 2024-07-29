import React, { useEffect } from "React";
import { Contacts as ContactComponent } from "../Contacts";
import Contact  from "@/Model/Contact";
import { useMessages } from "@/Hooks/useMessages";
import useContactStore from "@/Store/useContactStore";

interface ListContactsProps {
  search: string;
}

const ListContacts: React.FC<ListContactsProps> = ({ search }) => {
  const { data, error, isLoading } = useMessages();
  const { filteredContacts, setContacts, setSearch } = useContactStore();

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
