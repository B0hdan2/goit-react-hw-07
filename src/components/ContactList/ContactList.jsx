import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice.js";

import Contact from "../Contact/Contact.jsx";
import s from "./ContactList.module.css";



function ContactList() {
  const filteredСontacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.list}>
      {filteredСontacts.map((contact) => (
        <li className={s.item} key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
