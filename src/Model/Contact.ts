import Message from '@/Model/Message'
import Avatars from '@/Model/Avatar'
export default interface Contact {
    id: number;
    nombre: string;
    thumbnail: keyof Avatars;
    mensajes: Message[];
    nro?: string;
    ultima_conexion?: string;
  }