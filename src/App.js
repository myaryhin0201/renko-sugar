// Компоненты
import { useEffect, Suspense, lazy } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import routes from './routes';
import AppBar from './components/AppBar';
import Container from './components/Container';
import Loader from './components/Loader';
import { authOperations } from './redux/auth';
import { useDispatch } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "register-page" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */),
);
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "contacts-page" */),
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute exact path={routes.home}>
            <HomePage />
          </PublicRoute>
          <PublicRoute
            path={routes.register}
            restricted
            redirectTo={routes.contacts}
          >
            <RegisterPage />
          </PublicRoute>
          <PublicRoute
            path={routes.login}
            restricted
            redirectTo={routes.contacts}
          >
            <LoginPage />
          </PublicRoute>
          <PrivateRoute path={routes.contacts} redirectTo={routes.login}>
            <ContactsPage />
          </PrivateRoute>
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;
