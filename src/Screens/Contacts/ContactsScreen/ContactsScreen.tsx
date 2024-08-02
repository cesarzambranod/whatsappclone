import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ContactsFooter, ContactsHeader, ListContacts } from "../../../Componets/Contacts";
const queryClient = new QueryClient();
const ContactsScreen = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (value: React.SetStateAction<string>) => {
    setSearch(value);
  };
  return (
    <>
      <ContactsHeader
        search={search}
        onSearchChange={handleSearchChange}
      ></ContactsHeader>
      <QueryClientProvider client={queryClient}>
        <ListContacts search={search} />
      </QueryClientProvider>
      <ContactsFooter />
    </>
  );
};

export default ContactsScreen;
