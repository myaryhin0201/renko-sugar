import ContactsList from '../components/ContactsList';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import Spinner from '../components/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { contactsOperations, contactsSelectors } from '../redux/contacts';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors.getLoading);
  const isError = useSelector(contactsSelectors.getError);
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <p>Oops, we have some loading error! :(</p>
      ) : (
        <ContactsList />
      )}
    </>
  );
};

export default ContactsPage;
