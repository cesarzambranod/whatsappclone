import React from "react";
import { useParams, Link } from "react-router-dom";
import { avatars } from "@/utils/avatars";
import { ArrowLeft, MoreVertical } from "lucide-react";
import {
  Phone,
  Video,
  Search,
  Bell,
  Bookmark,
  Lock,
  Clock,
  Image,
  ShieldCheck,
} from "lucide-react";
import useContactStore from "@/Store/useContactStore";

const ContactoInfo: React.FC = () => {
  const { contactoID } = useParams<{ contactoID: string }>();
  const { filteredContacts } = useContactStore();

  const contacto = filteredContacts.find((c) => c.id === Number(contactoID));

  if (!contacto) {
    return <div>Contact not found</div>;
  }

  const imgSrc = avatars[contacto.thumbnail];

  return (
    <div className="p-4">
      <div className="flex items-start bg-green-700 text-white p-4 justify-between">
        <Link to={`/message/${contacto.id}`}>
          <ArrowLeft className="text-2xl" />
        </Link>
        <div className="flex flex-col items-center">
          <img
            src={imgSrc}
            alt={contacto.nombre}
            className="rounded-full w-48 mb-2"
          />
          <div className="flex flex-col items-center">
            <div className="font-semibold text-lg">{contacto.nombre}</div>
            <div className="text-gray-400">{contacto?.nro}</div>
          </div>
        </div>
        <MoreVertical className="text-2xl" />
      </div>
      <div className="flex justify-around my-4 gap-4">
        <div className="flex flex-col items-center justify-center border border-gray-400 rounded-xl w-36 p-2">
          <Phone className="text-green-500 text-3xl mb-2" />
          <p className="text-sm text-gray-400">Llamar</p>
        </div>
        <div className="flex flex-col items-center justify-center border border-gray-400 rounded-xl w-36 p-2">
          <Video className="text-green-500 text-3xl mb-2" />
          <p className="text-sm text-gray-400">Video</p>
        </div>
        <div className="flex flex-col items-center justify-center border border-gray-400 rounded-xl w-36 p-2">
          <Search className="text-green-500 text-3xl mb-2" />
          <p className="text-sm text-gray-400">Buscar</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mx-4">
        <div className="flex items-center text-green-800 border-b border-green-800 py-2 hover:bg-green-600">
          <Bell className="text-gray-400 text-2xl" />
          <p className="ml-2 flex flex-col">Notificaciones</p>
        </div>
        <div className="flex items-center text-green-800 border-b border-green-800 py-2 hover:bg-green-600">
          <Image className="text-gray-400 text-2xl" />
          <p className="ml-2 flex flex-col">
            Visibilidad de archivos multimedia
            <span className="text-gray-400 text-sm">Desactivada</span>
          </p>
        </div>
        <div className="flex items-center text-green-800 border-b border-green-800 py-2 hover:bg-green-600">
          <Bookmark className="text-gray-400 text-2xl" />
          <p className="ml-2 flex flex-col">Mensajes conservados</p>
        </div>
        <div className="flex items-center text-green-800 border-b border-green-800 py-2 hover:bg-green-600">
          <Lock className="text-gray-400 text-2xl" />
          <p className="ml-2 flex flex-col">
            Cifrado
            <span className="text-gray-400 text-sm">
              Los mensajes y las llamadas están cifrados de extremo a extremo.
              Toca para verificarlo
            </span>
          </p>
        </div>
        <div className="flex items-center text-green-800 border-b border-green-800 py-2 hover:bg-green-600">
          <Clock className="text-gray-400 text-2xl" />
          <p className="ml-2 flex flex-col">
            Mensajes temporales
            <span className="text-gray-400 text-sm">90 días</span>
          </p>
        </div>
        <div className="flex items-center text-green-800 border-b border-green-800 py-2 hover:bg-green-600">
          <ShieldCheck className="text-gray-400 text-2xl" />
          <p className="ml-2 flex flex-col">
            Restringir chat
            <span className="text-gray-400 text-sm">
              Restringe y oculta este chat en este dispositivo
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactoInfo;
