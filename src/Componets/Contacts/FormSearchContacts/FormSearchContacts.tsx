import React from 'react';

interface FormSerchMessageProps {
  search: string;
  onSearchChange: (value: string) => void;
}

const FormSerchMessage: React.FC<FormSerchMessageProps> = ({ search, onSearchChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onSearchChange === 'function') {
      onSearchChange(e.target.value);
    }
  }

  return (
    <form className="flex justify-center w-full rounded-md p-2">
      <input
        type="text"
        placeholder="Buscar..."
        onChange={handleChange}
        value={search}
        className="w-full border-none rounded-md outline-none text-sm p-1"
      />
    </form>
  );
}

export default FormSerchMessage;
