import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from '../../images/default-avatar.png';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: '12px',
  },
});

// const { getUserEmail } = authSelectors;
const { getUserName } = authSelectors;

const UserMenu = () => {
  // const email = useSelector(getUserEmail);
  const name = useSelector(getUserName);
  const dispatch = useDispatch();
  const onLogout = useCallback(() => dispatch(authOperations.logout()), [
    dispatch,
  ]);

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img
        src={defaultAvatar}
        alt="avatar"
        width="40"
        className={classes.avatar}
      />
      <span className={classes.name}>
        Welcome, {name}
        {/* {email} */}
      </span>
      <button
        className="Navlink--active Navlink"
        type="button"
        onClick={onLogout}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
