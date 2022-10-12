import {
  takeLatest,
  takeEvery,
  put,
  all,
  call,
  select,
} from '@redux-saga/core/effects';
import axios from 'axios';
import { ASYNC_SIGN_IN } from './actions/authActions';
import { logIn } from './sagas/authSaga';

const LOAD_ADMIN_WORKED_HOURS_URL = 'http://localhost:8080/admin/api/projects';
const LOAD_USER_WORKED_HOURS_URL =
  'http://localhost:8080/api/projects/worked-hours';
const REGISTER_WORKED_HOURS_URL = 'http://localhost:8080/api/projects/register';
const LOAD_PROJECTS_URL = 'http://localhost:8080/api/projects';

export default function* rootSaga() {
  yield all([
    takeLatest(ASYNC_SIGN_IN, logIn),
    takeEvery('ASYNC_LOAD_USER_WORKED_HOURS', loadUserWorkedHours),
    takeEvery('ASYNC_LOAD_ADMIN_WORKED_HOURS', loadAdminWorkedHours),
    takeEvery('ASYNC_REGISTER_WORKED_HOURS', registerWorkedHours),
    takeEvery('ASYNC_LOAD_PROJECTS', loadProjects),
  ]);
}

function* loadProjects() {
  try {
    const token = sessionStorage.getItem('token');
    const res = yield call(axios.get, LOAD_PROJECTS_URL, {
      headers: {
        authorization: token,
      },
    });
    yield put({ type: 'LOAD_PROJECT_SUCCESS', payload: res });
  } catch (err) {
    yield put({ type: 'LOAD_PROJECT_FAILED', payload: { err } });
  }
}

function* registerWorkedHours() {
  try {
    const state = yield select();

    const date = state.registerReducer.date;
    const workedHours = state.registerReducer.workedHours;
    const project = state.registerReducer.project;

    const data = {
      date,
      workedHours,
      project,
    };

    const token = sessionStorage.getItem('token');
    const config = {
      headers: {
        authorization: token,
      },
    };

    const res = yield call(axios.post, REGISTER_WORKED_HOURS_URL, data, config);
    yield put({ type: 'REGISTER_WORKED_HOURS_SUCESS', payload: res });
  } catch (err) {
    yield put({ type: 'REGISTER_WORKED_HOURS_FAILED', payload: { err } });
  }
}

function* loadUserWorkedHours() {
  try {
    const token = sessionStorage.getItem('token');
    const res = yield call(axios.get, LOAD_USER_WORKED_HOURS_URL, {
      headers: {
        authorization: token,
      },
    });
    yield put({ type: 'LOAD_USER_WORKED_HOURS_SUCCESS', payload: res });
  } catch (err) {
    yield put({ type: 'LOAD_USER_WORKED_HOURS_FAILED', payload: { err } });
  }
}

function* loadAdminWorkedHours() {
  try {
    const token = sessionStorage.getItem('token');
    const res = yield call(axios.get, LOAD_ADMIN_WORKED_HOURS_URL, {
      headers: {
        authorization: token,
      },
    });
    yield put({ type: 'LOAD_ADMIN_WORKED_HOURS_SUCCESS', payload: res });
  } catch (err) {
    yield put({ type: 'LOAD_ADMIN_WORKED_HOURS_FAILED', payload: { err } });
  }
}
