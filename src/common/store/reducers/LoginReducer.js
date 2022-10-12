import {
  LOAD_SESSION,
  LOGIN_ERROR_MESSAGE,
  SIGN_IN_FAILED,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
} from '../actions/authActions';

const INITIAL_STATE = {
  loggedIn: false,
  user: {
    id: 0,
    name: '',
    email: '',
    admin: false,
  },
  error: {
    username: '',
    password: '',
  },
};

export function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_IN_SUCCESS: {
      const json = action.payload.headers.user;
      const user = JSON.parse(json);

      const auth_header = action.payload.headers.authorization;

      sessionStorage.setItem('token', auth_header);
      sessionStorage.setItem('user', user);

      return {
        ...state,
        user,
        loggedIn: true,
      };
    }

    case SIGN_IN_FAILED:
      return {
        ...state,
        error: {
          username: { message: 'Credenciais inválidas' },
        },
      };

    case SIGN_OUT:
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');

      return {
        ...state,
        user: {
          id: 0,
          name: '',
          email: '',
          admin: false,
        },
        loggedIn: false,
      };

    case LOAD_SESSION: {
      const user = JSON.parse(sessionStorage.getItem('user'));
      return {
        ...state,
        user,
        loggedIn: true,
      };
    }

    case LOGIN_ERROR_MESSAGE:
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
