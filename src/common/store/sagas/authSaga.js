import { delay, put, call } from 'redux-saga/effects';
import { AuthService } from '../../services/AuthService';
import { SIGN_IN_SUCCESS, SIGN_IN_FAILED } from '../actions/authActions';

export function* logIn({ payload }) {
  try {
    yield delay(500);
    const res = yield call(AuthService.login, payload);
    yield put({ type: SIGN_IN_SUCCESS, payload: res });
  } catch (err) {
    yield put({ type: SIGN_IN_FAILED, payload: { err } });
  }
}
