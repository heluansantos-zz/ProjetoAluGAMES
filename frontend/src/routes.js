import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NewIncident from "./pages/NewIncident";
import AboutGamer from "./pages/AboutGamer";
import AboutUser from "./pages/AboutUser";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Logon} exact />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={NewIncident} />
        <Route path="/aboutgamer" component={AboutGamer} />
        <Route path="/aboutuser" component={AboutUser} />
      </Switch>
    </BrowserRouter>
  );
}
