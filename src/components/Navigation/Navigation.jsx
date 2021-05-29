import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { authSelectors } from '../../redux/auth';

const Navigation = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav>
      <NavLink exact to={routes.home} className="Navlink__logo">
        Renko Sugar
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to={routes.contacts}
          className="Navlink"
          activeClassName="Navlink--active"
        >
          Contacts
        </NavLink>
      )}

      {/* <div className="contact">
        <p>number 7929765465</p>
      </div> */}
    </nav>
  );
};

export default Navigation;
