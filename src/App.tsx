import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ContactsScreen } from "./Screens/Contacts/ContactsScreen";
import { InfoScreen } from "./Screens/Info/InfoScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ContactsScreen />} />
        <Route path="/contacts" element={<ContactsScreen />} />
        <Route path="/contactInfo/:contactoID" element={<InfoScreen />} />
      </Routes>
    </>
  );
}

export default App;
