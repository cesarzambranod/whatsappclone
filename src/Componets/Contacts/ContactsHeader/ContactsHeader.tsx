import React from "react";
import { Camera, MoreVertical } from "lucide-react";
import FormSearchContacts from "../FormSearchContacts/FormSearchContacts";

interface ContactosHeaderProps {
  search: string;
  onSearchChange: (value: string) => void;
}

const ContactosHeader: React.FC<ContactosHeaderProps> = ({
  search,
  onSearchChange,
}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-between p-4 bg-gray-900 dark:bg-gray-800">
        <div className="text-lg font-bold text-gray-100 dark:text-white">
          WhatsApp
        </div>
        <div className="flex items-center justify-end w-full">
          <button className="flex flex-col items-center">
            <Camera className="text-white w-6 h-6" />
          </button>
          <button className="flex flex-col items-center">
            <MoreVertical className="text-white w-6 h-6" />
          </button>
        </div>
        <FormSearchContacts search={search} onSearchChange={onSearchChange} />
      </div>
    </>
  );
};

export default ContactosHeader;
