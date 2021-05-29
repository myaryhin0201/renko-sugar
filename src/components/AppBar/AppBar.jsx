import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import Service from '../SiteNav';
import { createUseStyles } from 'react-jss';
import { authSelectors } from '../../redux/auth';

const { getIsAuthenticated } = authSelectors;

const useStyles = createUseStyles({
  header: {
    display: 'flex',
    justifyContent: ' space-between',
    alignItems: 'center',
    padding: '24px',
    border: '10px',
    borderBottom: ' 2px solid white',
    marginBottom: '25px',
  },
});

const AppBar = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Navigation />
      <Service />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
