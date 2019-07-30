import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Dashborad from "./components/dashboard/Dashboard";
import NearbyShops from "./components/shops/NearbyShops";
import PreferredShops from "./components/shops/PreferredShops";
import SignIn from "./components/auth/SignIn";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">

          <Switch>
            <Route exact path="/" component={Dashborad} />
            <Route exact path="/nearbyshops" component={NearbyShops} />
            <Route exact path="/preferredshops" component={PreferredShops} />
            <Route exact path="/signin" component={SignIn} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
