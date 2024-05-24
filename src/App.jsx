import css from "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(contacts);
  const addContact = () => {};
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList contacts={contacts} />
      </div>
    </>
  );
}

export default App;
