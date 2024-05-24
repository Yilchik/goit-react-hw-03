import css from "./App.css";
import contact from "../../contact.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contact);
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
