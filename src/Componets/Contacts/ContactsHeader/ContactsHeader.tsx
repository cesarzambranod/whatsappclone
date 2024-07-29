import React from "react";
import cameraIcon from "@/assets/icons/camera.svg";
import threePointIcon from "@/assets/icons/three_point.svg";
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
      <div className="flex items-center justify-between p-4 bg-gray-900 dark:bg-gray-800">
        <div className="text-lg font-bold text-gray-100 dark:text-white">
          WhatsApp
        </div>
        <div className="flex items-center justify-between">
          <FormSearchContacts search={search} onSearchChange={onSearchChange} />
        </div>
        <div className="flex space-x-4">
          <button className="flex flex-col items-center">
            <img src={cameraIcon} alt="Status" className="w-6 h-6" />
          </button>
          <button className="flex flex-col items-center">
            <img src={threePointIcon} alt="Calls" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactosHeader;
