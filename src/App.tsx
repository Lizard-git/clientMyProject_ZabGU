import React from 'react';
import { Switch, Route } from "react-router-dom";
import { LayoutAdminPanel, LayoutSite, LayoutAuth } from './components/Layouts';

/* import css project */
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
/* _________________________________________ */

function App() {
  return (
    <div className="ComponentCreator">
      
    </div>
  );
}

export default App;
    {/* <Switch >
      <Route exact path="/" component={LayoutSite} />
      <Route exact path="/auth" component={LayoutAuth} />
      <Route exact path="/userpanel" component={LayoutAdminPanel} />
    </Switch> */}