import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';
import HeaderContainer from './header/header_container';
import ModalContainer from './modal/modal_container';
import SplashScreenContainer from './splash_screen/splash_screen_container';
import HostShowContainer from './hosts/host_show_container';
import DashboardContainer from './dashboard/dashboard_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <section>
      <ModalContainer />
      <HeaderContainer />
      <br/>
      <br/>
      <br/>
      <AuthRoute exact path='/' component={SplashScreenContainer} />
      <ProtectedRoute exact path='/' component={DashboardContainer} />
      <AuthRoute exact path='/hosts' component={HostShowContainer} />
      <AuthRoute exact path='/hosts/:id' component={HostShowContainer} />
    </section>
  </div>
);
export default App;
