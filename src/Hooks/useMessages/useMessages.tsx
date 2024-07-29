import { Avatars } from '@/utils/avatars';
import { useQuery } from '@tanstack/react-query';

interface Mensaje {
  autor: string;
  texto: string;
  estado: string;
  dia: string;
  hora: string;
  id: string;
}

interface MensajeGroup {
  nombre: string;
  thumbnail: keyof Avatars;
  ultima_conexion: string;
  id: number;
  nro: string;
  mensajes: Mensaje[];
}

const fetchMessages = async (): Promise<MensajeGroup[]> => {
  const response = await fetch('/messaging.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const useMessages = () => {
  return useQuery<MensajeGroup[], Error>({
    queryKey: ['messages'],
    queryFn: fetchMessages,
  });
};

export default useMessages;
