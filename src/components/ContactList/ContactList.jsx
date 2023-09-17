// import { ContactCard } from 'components/ContactCard/ContactCard';
import { ContactCard } from 'components/ContactCard.jsx/ContactCard';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterName = useSelector(getFilter);

  // console.log(filterName);
  // console.log(contacts);
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterName)
  );

  return (
    <ul>
      {filterContacts.map(contact => (
        <ContactCard contact={contact} />
      ))}
    </ul>
  );
};
