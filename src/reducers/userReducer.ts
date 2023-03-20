import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../actions/userActions';
import { UserActionType, UserState } from '../types/UserType';

const initialState: UserState = {
  loading: false,
  users: [],
  error: '',
};

export const userReducer = (state: UserState = initialState, action: UserActionType) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload, error: '' };
    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload, users: [] };
    default:
      return state;
  }
};

export default userReducer;
