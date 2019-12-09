import axios from 'axios';
import jwt_decode from 'jwt-decode';

import setAuthToken from '../utils/setAuthToken';

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './types';

//Register a new user (register user thunk )

export const registerUser = (userData, history) => (dispatch) => {
	axios.post('https://squad-backend-v1.herokuapp.com/api/users/register', userData).then((res) => history.push('/login')).catch((e) =>
		dispatch({
			type: GET_ERRORS,
			payload: e.response.data
    })
 
	);
};

// Login user and get token
export const loginUser = (userData) => (dispatch) => {
	axios
		.post('https://squad-backend-v1.herokuapp.com/api/users/login', userData)
		.then((res) => {
			// Save to localStorage

			// Set token to localStorage
			const { token } = res.data;
			if(!token) {
				dispatch({
					type: GET_ERRORS,
					payload: {error: "please check password"}
				})
				return
			}
			localStorage.setItem('jwtTokenTeams', JSON.stringify(token));
			// Set token to Auth header
			setAuthToken(token);
			// Decode token to get user data
			const decoded = jwt_decode(token);
			// Set current user
			dispatch(setCurrentUser(decoded));
		})
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		
		);
};

// Set logged in user
export const setCurrentUser = (decoded) => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded
	};
};

// User loading
export const setUserLoading = () => {
	return {
		type: USER_LOADING
	};
};

// Log user out
export const logoutUser = (history) => (dispatch) => {
	// Remove token from local storage
	localStorage.removeItem('jwtTokenTeams');
	// Remove auth header for future requests
	setAuthToken(false);
	// Set current user to empty object {} which will set isAuthenticated to false
	dispatch(setCurrentUser({}));

	history.push('/dashboard');
};
