import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ContactsScreen } from "./Screens/Contacts/ContactsScreen";
import { InfoScreen } from "./Screens/Info/InfoScreen";
import { ChatScreens } from "./Screens/Chat/ChatScreens";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ContactsScreen />} />
        <Route path="/contacts" element={<ContactsScreen />} />
        <Route path="/message/:contactoID" element={<ChatScreens />} />
        <Route path="/contactInfo/:contactoID" element={<InfoScreen />} />
      </Routes>
    </>
  );
}

export default App;
