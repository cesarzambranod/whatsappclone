import React, { useState } from "react";
import {
  ContactsHeader,
  ContactsFooter,
  ListContacts,
} from "@/Componets/Contacts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
const ContactsScreen = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (value: React.SetStateAction<string>) => {
    setSearch(value);
  };
  return (
    <QueryClientProvider client={queryClient}>
      <ContactsHeader
        search={search}
        onSearchChange={handleSearchChange}
      ></ContactsHeader>
      <ListContacts search={search} />
      <ContactsFooter />
    </QueryClientProvider>
  );
};

export default ContactsScreen;
