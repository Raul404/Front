  export type User = {
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
  };
  
  export interface UserState {
    [x: string]: any;
    loading: boolean;
    users: User[];
    error: string;
  }
  
  export enum UserActionTypes {
    FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'
  }
  
  interface FetchUsersRequest {
    type: UserActionTypes.FETCH_USERS_REQUEST;
  }
  
  interface FetchUsersSuccess {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: User[];
  }
  
  interface FetchUsersFailure {
    type: UserActionTypes.FETCH_USERS_FAILURE;
    payload: string;
  }
  
  export type UserActionType = FetchUsersRequest | FetchUsersSuccess | FetchUsersFailure;
  