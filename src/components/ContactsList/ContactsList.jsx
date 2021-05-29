import { createUseStyles } from 'react-jss';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts/';
import ContactItem from '../ContantItem';
const useStyles = createUseStyles({
  ContactsList: {
    padding: '20px',
    width: '500px',
    border: '2px solid black',
    borderRadius: '10px',
    marginBottom: '20px',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  const onDeleteContact = useCallback(
    id => dispatch(contactsOperations.deleteContact(id)),
    [dispatch],
  );

  const classes = useStyles();

  return (
    <ul className={classes.ContactsList}>
      {contacts.length !== 0 ? (
        contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        ))
      ) : (
        <p>This contact is not in the list</p>
      )}
    </ul>
  );
};
export default ContactsList;
