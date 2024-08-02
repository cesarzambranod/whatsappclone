import Message from './Message';
import Avatars from './Avatar'
export default interface Contact {
    id: number;
    nombre: string;
    thumbnail: keyof Avatars;
    mensajes: Message[];
    nro?: string;
    ultima_conexion?: string;
  }