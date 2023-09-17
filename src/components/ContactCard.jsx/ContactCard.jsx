import { useDispatch } from 'react-redux';
import { Card, CardBlock } from './ContactCard.Styled';
import { deleteContact } from 'redux/contactsSlice';

export const ContactCard = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  // const handleDelete = () => dispatch(deleteContact(id));
  return (
    <CardBlock>
      <Card key={id}>
        <span>{name}</span>
        <span>{number}</span>
        <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        {/* <button onClick={handleDelete}>Delete</button> */}
      </Card>
    </CardBlock>
  );
};
