import { MessageSquare, Users, Info, Phone } from "lucide-react";
import "./ContactsFooter.css";

const ContactsFooter = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-800 text-white flex justify-around items-center py-2">
      <button className="flex flex-col items-center">
        <MessageSquare className="w-6 h-6" />
        <span className="text-xs mt-1">Chats</span>
      </button>
      <button className="flex flex-col items-center">
        <Info className="w-6 h-6" />
        <span className="text-xs mt-1">Status</span>
      </button>
      <button className="flex flex-col items-center">
        <Users className="w-6 h-6" />
        <span className="text-xs mt-1">Groups</span>
      </button>
      <button className="flex flex-col items-center">
        <Phone className="w-6 h-6" />
        <span className="text-xs mt-1">Calls</span>
      </button>
    </footer>
  );
};

export default ContactsFooter;
