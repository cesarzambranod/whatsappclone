import "./ContactsFooter.css";
import chatIcon from "@/assets/icons/chat.svg";
import groupIcon from "@/assets/icons/group.svg";
import statusIcon from "@/assets/icons/status.svg";
import callsIcon from "@/assets/icons/call.svg";

const ContactsFooter = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-800 text-white flex justify-around items-center py-2">
      <button className="flex flex-col items-center">
        <img src={chatIcon} alt="Chat" className="w-6 h-6" />
        <span className="text-xs mt-1">Chats</span>
      </button>
      <button className="flex flex-col items-center">
        <img src={statusIcon} alt="Status" className="w-6 h-6" />
        <span className="text-xs mt-1">Status</span>
      </button>
      <button className="flex flex-col items-center">
        <img src={groupIcon} alt="Groups" className="w-6 h-6" />
        <span className="text-xs mt-1">Groups</span>
      </button>
      <button className="flex flex-col items-center">
        <img src={callsIcon} alt="Calls" className="w-6 h-6" />
        <span className="text-xs mt-1">Calls</span>
      </button>
    </footer>
  );
};

export default ContactsFooter;
