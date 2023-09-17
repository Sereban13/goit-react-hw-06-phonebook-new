import { useDispatch } from 'react-redux';
import { SearchBlock, Input } from './Searchbar.Styled';
import { filterName } from 'redux/filterSlice';

export const SearchBar = () => {
  const dispatch = useDispatch();
  return (
    <SearchBlock>
      <label htmlFor="searchFilter">Find your contact</label>
      <Input
        name="filter"
        id="searchFilter"
        type="text"
        onChange={event => dispatch(filterName(event.target.value))}
      />
    </SearchBlock>
  );
};
