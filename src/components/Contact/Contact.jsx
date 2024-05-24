import css from "./Contact.module.css";
import { RiUser3Fill } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";

function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div>
      <p>
        <RiUser3Fill className="myIcon" size={24} />
        {name}
      </p>
      <p>
        <BsTelephoneFill className="myIcon" size={24} />
        {number}
      </p>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
