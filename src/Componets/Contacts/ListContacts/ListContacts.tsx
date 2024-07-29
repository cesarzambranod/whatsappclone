import React from "react";
import { Contact } from "../Contact";
import { Avatars } from "@/utils/avatars";
import { useMessages } from "@/Hooks/useMessages";

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

interface ListsContactsProps {
  search: string;
}

const ListContacts: React.FC<ListsContactsProps> = ({ search }) => {
  const { data, error, isLoading } = useMessages();
  const [contactosFiltrados, setContactosFiltrados] = React.useState<Contact[]>(
    []
  );

  React.useEffect(() => {
    if (data) {
      const contactos: Contact[] = data.map((group) => ({
        id: group.id.toString(),
        nombre: group.nombre,
        thumbnail: group.thumbnail as keyof Avatars,
        mensajes: group.mensajes.map((mensaje) => ({
          texto: mensaje.texto,
          hora: mensaje.hora,
          estado: mensaje.estado as "visto" | "entregado" | "no_entregado",
        })),
      }));
      setContactosFiltrados(contactos);
    }
  }, [data]);

  React.useEffect(() => {
    if (search) {
      setContactosFiltrados((prevContactos) =>
        prevContactos.filter((contacto) =>
          contacto.nombre.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setContactosFiltrados((prevContactos) => prevContactos);
    }
  }, [search]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4 space-y-2">
      {contactosFiltrados.map((contacto) => (
        <Contact key={contacto.id} contact={contacto} />
      ))}
    </div>
  );
};

export default ListContacts;
