import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./layout/nav/nav";
import Main from "./app/main/main";
import Clients from "./app/clients/clients";
import Invoices from "./app/invoices/invoices";

import './global/styles/reset.scss';
import './global/styles/elements.scss';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Nav />
          <div className="main">
            <Route exact path="/" component={Main} />
            <Route exact path="/clients" component={Clients} />
            <Route exact path="/invoices" component={Invoices} />
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
