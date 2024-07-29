import { FC, ChangeEvent } from 'react';

interface FormSearchContactsProps {
  search: string;
  onSearchChange: (value: string) => void;
}

const FormSearchContacts: FC<FormSearchContactsProps> = ({ search, onSearchChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <form className="max-w-md mx-auto p-2">
      <label
        htmlFor="search-contacts"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m0 0a8.5 8.5 0 1 0-12.02 0 8.5 8.5 0 0 0 12.02 0z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="search-contacts"
          className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-100 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Buscar..."
          onChange={handleChange}
          value={search}
        />
      </div>
    </form>
  );
};

export default FormSearchContacts;
