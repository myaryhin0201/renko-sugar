import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts/';

const initialState = {
  name: '',
  number: '',
};
const ContactForm = () => {
  const [inputValue, setInputValue] = useState(initialState);
  const { name, number } = inputValue;

  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(contactsOperations.addContact(name, number, contacts));
      setInputValue(initialState);
      e.currentTarget.reset();
    },
    [dispatch, name, number, contacts],
  );

  const changeInput = useCallback(
    e => {
      const { name, value } = e.currentTarget;
      setInputValue({ ...inputValue, [name]: value });
    },
    [inputValue],
  );
  return (
    <div className="d-flex justify-content-center h-100 PHONEBOOK">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              <label>
                <input
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  required
                  autoFocus
                  placeholder="Enter name"
                  onChange={changeInput}
                  className="form-control"
                />
              </label>
            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-phone"></i>
                </span>
              </div>
              <label>
                <input
                  type="tel"
                  name="number"
                  pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                  title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                  required
                  placeholder="Enter phone number"
                  onChange={changeInput}
                  className="form-control"
                />
              </label>
            </div>

            <div className="form-group">
              <button
                type="submit"
                value="addContact"
                className="btn float-right login_btn"
              >
                Add Contact
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
