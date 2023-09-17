// import { ContactCard } from 'components/ContactCard/ContactCard';
import { ContactCard } from 'components/ContactCard.jsx/ContactCard';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
// import { getContacts } from 'redux/contactsSlice'

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul>
      {filterContacts.map(contact => (
        <ContactCard contact={contact} />
      ))}
    </ul>
  );
};
