import "./App.css";
import primaryContacts from "./contacts.json";
import { useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const [contacts] = useState(primaryContacts);
  const [filter, setFilter] = useState("");

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        {/* <ContactForm /> */}
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={visibleContacts} />
      </div>
    </>
  );
}

export default App;
