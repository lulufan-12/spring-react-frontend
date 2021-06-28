import { createStore } from 'redux';

function reducer() {
  return {
    loggedIn: true,
    user: {
      id: 1,
      name: 'Luis Felipe',
      email: 'luis@email.com',
      admin: true,
    },
    loginForm: {
      username: '',
      password: '',
    },
    registerHoursForm: {
      date: '',
      quantity: 1,
    },
    projects: [
      {
        id: 1,
        name: 'Projeto 1',
        workedHours: 16,
      },
      {
        id: 2,
        name: 'Projeto 2',
        workedHours: 16,
      },
      {
        id: 3,
        name: 'Projeto 3',
        workedHours: 16,
      },
      {
        id: 4,
        name: 'Projeto 4',
        workedHours: 16,
      },
    ],
  };
}

const store = createStore(reducer);

export default store;
