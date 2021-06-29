import {
  takeLatest,
  takeEvery,
  delay,
  put,
  all,
  call,
  select,
} from '@redux-saga/core/effects';
import axios from 'axios';

const LOGIN_URL = 'http://localhost:8080/login';
const LOAD_ADMIN_PROJECTS_URL = 'http://localhost:8080/admin/api/projects';
const LOAD_USER_PROJECTS_URL =
  'http://localhost:8080/api/projects/worked-hours';

export default function* rootSaga() {
  yield all([
    takeLatest('ASYNC_SIGN_IN', logIn),
    takeEvery('ASYNC_LOAD_USER_PROJECTS', loadUserProjects),
    takeEvery('ASYNC_LOAD_ADMIN_PROJECTS', loadAdminProjects),
  ]);
}

function* loadUserProjects() {
  try {
    const token = sessionStorage.getItem('token');
    const res = yield call(axios.get, LOAD_USER_PROJECTS_URL, {
      headers: {
        authorization: token,
      },
    });
    yield put({ type: 'LOAD_USER_PROJECTS_SUCCESS', payload: res });
  } catch (err) {
    yield put({ type: 'LOAD_USER_PROJECTS_FAILED', payload: { err } });
  }
}

function* loadAdminProjects() {
  try {
    const token = sessionStorage.getItem('token');
    const res = yield call(axios.get, LOAD_ADMIN_PROJECTS_URL, {
      headers: {
        authorization: token,
      },
    });
    yield put({ type: 'LOAD_ADMIN_PROJECTS_SUCCESS', payload: res });
  } catch (err) {
    yield put({ type: 'LOAD_ADMIN_PROJECTS_FAILED', payload: { err } });
  }
}

function* logIn() {
  try {
    const state = yield select();
    const username = state.loginReducer.loginForm.username;
    const password = state.loginReducer.loginForm.password;
    const data = {
      username,
      password,
    };
    yield delay(500);
    const res = yield call(axios.post, LOGIN_URL, data);
    yield put({ type: 'SIGN_IN_SUCCESS', payload: res });
  } catch (err) {
    yield put({ type: 'SIGN_IN_FAILED', payload: { err } });
  }
}
