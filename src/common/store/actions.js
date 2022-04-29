//SAGA MIDDLEWARE ACTIONS

export function signIn() {
  return {
    type: 'ASYNC_SIGN_IN',
  };
}

export function loadUserWorkedHours() {
  return {
    type: 'ASYNC_LOAD_USER_WORKED_HOURS',
  };
}

export function loadAdminWorkedHours() {
  return {
    type: 'ASYNC_LOAD_ADMIN_WORKED_HOURS',
  };
}

export function submitWorkedHours() {
  return {
    type: 'ASYNC_REGISTER_WORKED_HOURS',
  };
}

export function loadProjects() {
  return {
    type: 'ASYNC_LOAD_PROJECTS',
  };
}

//REDUX DIRECT ACTIONS

export function loadSession() {
  return {
    type: 'LOAD_SESSION',
  };
}

export function signOut() {
  return {
    type: 'SIGN_OUT',
  };
}

export function clearProjects() {
  return {
    type: 'CLEAR_WORKED_HOURS',
  };
}

export function usernameChanged(username) {
  return {
    type: 'USERNAME_CHANGED',
    payload: {
      username: username,
    },
  };
}

export function passwordChanged(password) {
  return {
    type: 'PASSWORD_CHANGED',
    payload: {
      password: password,
    },
  };
}

export function dateChanged(date) {
  return {
    type: 'DATE_CHANGED',
    payload: {
      date: date,
    },
  };
}

export function workedHoursChanged(workedHours) {
  return {
    type: 'WORKED_HOURS_CHANGED',
    payload: {
      workedHours: workedHours,
    },
  };
}

export function projectChanged(project) {
  return {
    type: 'PROJECT_CHANGED',
    payload: {
      project: project,
    },
  };
}
