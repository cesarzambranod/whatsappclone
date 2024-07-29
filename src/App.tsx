import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ContactsScreen } from "./Screens/Contacts/ContactsScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ContactsScreen />} />
        <Route path="/contactos" element={<ContactsScreen />} />
      </Routes>
    </>
  );
}

export default App;
