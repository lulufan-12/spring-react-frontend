import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { useState } from 'react';

const LoginForm = ({ onSubmit, onError, onForgotPassword }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const [state, setState] = useState({ loading: false });

  const toggleLoading = () => {
    setState((_state) => ({ loading: !_state.loading }));
  };

  const submitFunction = async (data) => {
    toggleLoading();
    await onSubmit(data);
    reset();
    toggleLoading();
  };

  return (
    <Form onSubmit={handleSubmit(submitFunction, onError)}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="username">E-mail</Form.Label>
        <Form.Control
          type="email"
          {...register('username', {
            required: { value: true, message: 'E-mail é obrigatório' },
          })}
          aria-invalid={Boolean(errors.username)}
          disabled={state.loading}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="password">Senha</Form.Label>
        <Form.Control
          type="password"
          {...register('password', {
            required: { value: true, message: 'Senha é obrigatória' },
          })}
          aria-invalid={Boolean(errors.password)}
          disabled={state.loading}
        />
      </Form.Group>
      <div className="d-flex justify-content-between mb-3">
        <Button
          className="d-inline-block"
          variant="primary"
          type="submit"
          disabled={state.loading}
        >
          Entrar
        </Button>
        <Button
          className="d-inline-block"
          variant="link"
          type="button"
          disabled={state.loading}
          onClick={onForgotPassword}
        >
          Esqueceu sua senha?
        </Button>
      </div>
    </Form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onForgotPassword: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
};

export default LoginForm;
