import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Dashborad from "./components/dashboard/Dashboard";
import NearbyShops from "./components/shops/NearbyShops";
import PreferredShops from "./components/shops/PreferredShops";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">

          <Switch>
            <Route exact path="/" component={Dashborad} />
            <Route path="/nearbyshops" component={NearbyShops} />
            <Route path="/preferredshops" component={PreferredShops} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
