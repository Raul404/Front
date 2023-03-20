import { Dispatch, AnyAction } from 'redux';
import axios from 'axios';

const apiUrl = 'https://fakestoreapi.com/users';

export interface User {
  address: {
    geolocation: {
      lat: string;
      long: string;
    };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
}

interface UserAction extends AnyAction {
  payload?: any;
}
const users: User[] = [
  // cole seus novos dados aqui
];
export const fetchUsers =()  => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await axios.get(apiUrl);
      
      dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
  
      
    }  catch (error: unknown) {
      if (error instanceof Error) {
        dispatch({ type: FETCH_USERS_FAILURE, payload:error.message});
      } else {
        console.log('fetchUsers desconhecido ')
      }
    }
    }
  };


export const createUser = (user: User) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await axios.post(apiUrl, user);
      dispatch({ type: CREATE_USER_SUCCESS, payload: response.data });
    } catch (error: any) {
      dispatch({ type: CREATE_USER_FAILURE, payload: error.message });
    }
  };
};

export const deleteUser = (userId: number) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      await axios.delete(`${apiUrl}/${userId}`);
      dispatch({ type: DELETE_USER_SUCCESS, payload: userId });
    } catch (error: any) {
      dispatch({ type: DELETE_USER_FAILURE, payload:error.message});
    }
  };
};

export const updateUser = (
  userId: number,
  user: User
) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await axios.put(`${apiUrl}/${userId}`, user);
      dispatch({ type: UPDATE_USER_SUCCESS, payload: { id: userId, user: response.data } });
    } catch (error: any) {
      dispatch({ type: UPDATE_USER_FAILURE, payload: error.message });
    }
  };
};

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';
