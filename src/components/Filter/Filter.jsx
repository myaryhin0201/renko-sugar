import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts/';
import useStyles from './FilterStyles';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);
  const onChange = useCallback(
    e => dispatch(contactsActions.changeFilter(e.target.value)),
    [dispatch],
  );
  const classes = useStyles();
  return (
    <label className={classes.Filter}>
      <span> Find contact by name</span>
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;
