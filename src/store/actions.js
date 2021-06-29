//SAGA MIDDLEWARE ACTIONS

export function signIn() {
  return {
    type: 'ASYNC_SIGN_IN',
  };
}

export function loadUserProjects() {
  return {
    type: 'ASYNC_LOAD_USER_PROJECTS',
  };
}

export function loadAdminProjects() {
  return {
    type: 'ASYNC_LOAD_ADMIN_PROJECTS',
  };
}

//REDUX DIRECT ACTIONS

export function signOut() {
  return {
    type: 'SIGN_OUT',
  };
}

export function clearProjects() {
  return {
    type: 'CLEAR_PROJECTS',
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

export function submitWorkedHours() {
  return {
    type: 'REGISTER_WORKED_HOURS',
  };
}
