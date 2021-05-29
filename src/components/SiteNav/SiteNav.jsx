import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  nav__list: {
    display: 'flex',
  },
});
const SiteNav = () => {
  const classes = useStyles();
  return (
    <ul className={classes.nav__list}>
      <li>
        <NavLink exact to={routes.home} className="Navlink">
          Услуги
        </NavLink>
      </li>
      <li>
        <NavLink exact to={routes.home} className="Navlink">
          Специалисты
        </NavLink>
      </li>
      <li>
        <NavLink exact to={routes.home} className="Navlink">
          Акции
        </NavLink>
      </li>
      <li>
        <NavLink exact to={routes.home} className="Navlink">
          Фотогалерея
        </NavLink>
      </li>
    </ul>
  );
};

export default SiteNav;
