import axios from 'axios';

import {
	CREATE_PROJECT,
	UPDATE_PROJECT,
	DELETE_PROJECT,
	GET_PROJECT,
	PROJECT_LOADING,
	GET_PROJECTS,
	PROJECTS_LOADING
} from './types';

// Create Project
export const createProject = (projectData) => (dispatch) => {
	axios
		.post('https://squad-backend-v1.herokuapp.com/api/projects/create', projectData)
		.then((res) =>
			dispatch({
				type: CREATE_PROJECT,
				payload: res.data
			})
		)
		.catch((err) => console.log(err));
};

// Update Project
export const updateProject = (projectData) => (dispatch) => {
	axios
		.patch('https://squad-backend-v1.herokuapp.com/api/projects/update', projectData)
		.then((res) =>
			dispatch({
				type: UPDATE_PROJECT,
				payload: res.data
			})
		)
		.catch((err) => console.log(err));
};

// Delete Project
export const deleteProject = (id, history) => (dispatch) => {
	axios
		.delete(`https://squad-backend-v1.herokuapp.com/api/projects/delete/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_PROJECT,
				payload: id
			})
		)
		.then((res) => history.push('/dashboard'))
		.catch((err) => console.log(err));
};

// Get specific project by id
export const getProject = (id) => (dispatch) => {
	dispatch(setProjectLoading());
	axios
		.get(`https://squad-backend-v1.herokuapp.com/api/projects/${id}`)
		.then((res) =>
			dispatch({
				type: GET_PROJECT,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_PROJECT,
				payload: null
			})
		);
};

// Get all projects for specific user
export const getProjects = () => (dispatch) => {
	dispatch(setProjectsLoading());
	axios
		.get('https://squad-backend-v1.herokuapp.com/api/projects')
		.then((res) =>
			dispatch({
				type: GET_PROJECTS,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_PROJECTS,
				payload: null
			})
		);
};

// Project loading
export const setProjectLoading = () => {
	return {
		type: PROJECT_LOADING
	};
};

// Projects loading
export const setProjectsLoading = () => {
	return {
		type: PROJECTS_LOADING
	};
};
