import css from "./ContactList.module.css";

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
