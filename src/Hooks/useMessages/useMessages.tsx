import Contact from '@/Model/Contact';
import { useQuery } from '@tanstack/react-query';


const fetchMessages = async (): Promise<Contact[]> => {
  const response = await fetch('/messaging.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const useMessages = () => {
  return useQuery<Contact[], Error>({
    queryKey: ['messages'],
    queryFn: fetchMessages,
  });
};

export default useMessages;
