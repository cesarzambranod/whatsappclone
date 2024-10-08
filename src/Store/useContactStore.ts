import Contact from "@/Model/Contact";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ContactState {
    contacts: Contact[];
    filteredContacts: Contact[];
    search: string;
    setContacts: (contacts: Contact[]) => void;
    setSearch: (search: string) => void;
}

const useContactStore = create<ContactState>()(
    persist((set) => ({
        contacts: [],
        filteredContacts: [],
        search: "",
        setContacts: (contacts) =>
            set({ contacts, filteredContacts: contacts }),
        setSearch: (search) => {
            set({ search });
            set((state) => ({
                filteredContacts: state.search
                    ? state.contacts.filter((contact) =>
                        contact.nombre
                            .toLowerCase()
                            .includes(state.search.toLowerCase())
                    )
                    : state.contacts,
            }));
        },
    }),
        {
            name: 'contact',
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);

export default useContactStore;