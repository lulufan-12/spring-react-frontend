const INITIAL_STATE = {
  loggedIn: false,
  user: {
    id: 0,
    name: '',
    email: '',
    admin: false,
  },
  loginForm: {
    username: '',
    password: '',
  },
  registerHoursForm: {
    date: '',
    quantity: 1,
  },
};

export function loginReducer(state = INITIAL_STATE, action) {
  if (action.type === 'USERNAME_CHANGED') {
    return {
      ...state,
      loginForm: {
        ...state.loginForm,
        username: action.payload.username,
      },
    };
  }
  if (action.type === 'PASSWORD_CHANGED') {
    return {
      ...state,
      loginForm: {
        ...state.loginForm,
        password: action.payload.password,
      },
    };
  }
  if (action.type === 'SIGN_IN_SUCCESS') {
    const data = action.payload.data;
    const auth_header = action.payload.headers.authorization;
    sessionStorage.setItem('token', auth_header);
    sessionStorage.setItem('id', data.id);
    sessionStorage.setItem('name', data.name);
    sessionStorage.setItem('email', data.email);
    sessionStorage.setItem('admin', data.admin);
    return {
      ...state,
      user: {
        id: action.payload.data.id,
        name: action.payload.data.name,
        email: action.payload.data.email,
        admin: action.payload.data.admin,
      },
      loginForm: {
        username: '',
        password: '',
        errorMessage: '',
      },
      loggedIn: true,
    };
  }

  if (action.type === 'SIGN_IN_FAILED') {
    return {
      ...state,
      loginForm: {
        username: '',
        password: '',
        errorMessage: 'Falha ao efetuar o login.',
      },
    };
  }

  if (action.type === 'SIGN_OUT') {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('admin');
    return {
      ...state,
      user: {
        id: 0,
        name: '',
        email: '',
        admin: false,
      },
      loginForm: {
        username: '',
        password: '',
      },
      loggedIn: false,
    };
  }

  return state;
}
