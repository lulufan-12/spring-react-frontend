// Types

export const ASYNC_SIGN_IN = 'AUTH_ACTIONS/ASYNC_SIGN_IN';
export const SIGN_OUT = 'AUTH_ACTIONS/SIGN_OUT';
export const SIGN_IN_SUCCESS = 'AUTH_ACTIONS/SIGN_IN_SUCCESS';
export const SIGN_IN_FAILED = 'AUTH_ACTIONS/SIGN_IN_FAILED';
export const LOGIN_ERROR_MESSAGE = 'AUTH_ACTIONS/LOGIN_ERROR_MESSAGE';
export const LOAD_SESSION = 'AUTH_ACTIONS/LOAD_SESSION';

// Actions
export function signIn(data) {
  return {
    type: ASYNC_SIGN_IN,
    payload: { ...data },
  };
}

export function signOut() {
  return {
    type: SIGN_OUT,
  };
}

export function setLoginErrorMessage(error) {
  return {
    type: LOGIN_ERROR_MESSAGE,
    payload: { error },
  };
}

export function loadSession() {
  return {
    type: LOAD_SESSION,
  };
}
