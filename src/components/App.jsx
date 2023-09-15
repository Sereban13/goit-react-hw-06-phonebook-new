import { GlobalStyle } from './GlobalStyle';
import { Section, Title } from './App.Styled';
import { SearchBar } from './Searchbar/Searchbar';
import { ContactList } from './ContactList/ContactList';
import { useState } from 'react';

export const App = () => {
  const [filter, setFilter] = useState('');

  const changeNameFilter = newName => {
    setFilter(newName);
  };
  return (
    <Section>
      <Title>Phonebook</Title>
      <Title>Contacts</Title>
      <SearchBar filterName={filter} onChangeName={changeNameFilter} />
      <ContactList />
      <GlobalStyle />
    </Section>
  );
};
