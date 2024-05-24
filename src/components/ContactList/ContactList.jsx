import css from "./App.css";

function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
