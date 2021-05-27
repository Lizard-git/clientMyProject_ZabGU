import React from 'react';
/* import { Switch, Route } from "react-router-dom";
import { LayoutAdminPanel, LayoutSite, LayoutAuth } from './components/Layouts'; */

/* import css project */
import './style/ResetCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.scss';
/* _________________________________________ */

import TopHeader from './components/SiteComponents/TopHeader';

function App() {
  return (
    <TopHeader />
  );
}

export default App;
/* 
  <Switch >
    <Route exact path="/" component={LayoutSite} />
    <Route exact path="/auth" component={LayoutAuth} />
    <Route exact path="/userpanel" component={LayoutAdminPanel} />
  </Switch>  
*/