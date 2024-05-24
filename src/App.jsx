import "./App.css";
import primaryContacts from "./contacts.json";
import { useState } from "react";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts] = useState(primaryContacts);
  // const addContact = () => {};
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        {/* <ContactForm />
        <SearchBox /> */}
        <ContactList contacts={contacts} />
      </div>
    </>
  );
}

export default App;
