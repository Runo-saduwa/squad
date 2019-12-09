import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';


// Utils
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

// Redux
import store from './store';
import {Provider} from 'react-redux';
import { setCurrentUser, logoutUser } from "./actions/authActions";

// Components

import Home from './components/Home/Home';
import NotFound from './components/404/404'
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PrivateRoute from './components/private-route/PrivateRoute';
import Layout from './components/Dashboard/Layout';

// Check for token to keep user logged in
if (localStorage.jwtTokenTeams) {
	// Set auth token header auth
	const token = JSON.parse(localStorage.jwtTokenTeams);
	setAuthToken(token);
  
	// Decode token and get user info and exp
	const decoded = jwt_decode(token);
  
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));
  
	// Check for expired token
	const currentTime = Date.now() / 1000; // to get in milliseconds
	if (decoded.exp < currentTime) {
	  // Logout user
	  store.dispatch(logoutUser());
  
	  // Redirect to login
	  window.location.href = "./login";
	}
  }

function App() {
	return (
	<Provider store={store}>
		 <Router>
		 <Switch>
			 <Route exact path="/" component={Home}/>
			 <Route exact path="/login" component={Login}/>
			 <Route exact path="/register" component={Register}/>
			 <PrivateRoute exact path="/dashboard" component={Layout} />
              <Route
                component={localStorage.jwtTokenTeams ? Layout : NotFound}
              />
		 </Switch>
	 </Router>
	</Provider>
	);
}

export default App;
