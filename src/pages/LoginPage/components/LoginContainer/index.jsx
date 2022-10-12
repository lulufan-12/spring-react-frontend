import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setLoginErrorMessage,
  signIn,
} from '../../../../common/store/actions/authActions';
import { Col } from 'react-bootstrap';
import LoginForm from '../../../../common/components/LoginForm';
import { useSelector } from 'react-redux';
import { ErrorMessage } from '../../styles';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.loginReducer.error);

  const handleSubmitForm = (data) => {
    dispatch(signIn(data));
  };

  const handleErrorForm = (_error) => {
    dispatch(
      setLoginErrorMessage({
        username: _error.username || '',
        password: _error.password || '',
      })
    );
  };

  const handleForgotPassword = () => {
    //TODO: implement new feature to change forgotten password
  };

  return (
    <Col
      md={6}
      className="p-3"
      style={{
        backgroundColor: '#ffffff',
        boxSizing: 'border-box',
      }}
    >
      <LoginForm
        onSubmit={handleSubmitForm}
        onError={handleErrorForm}
        onForgotPassword={handleForgotPassword}
      />
      <ErrorMessage>
        {Boolean(error.username) && <>{error.username.message}</>}
        {Boolean(error.password) && (
          <>
            {error.username && <br />}
            {error.password.message}
          </>
        )}
      </ErrorMessage>
    </Col>
  );
};

export default LoginContainer;
