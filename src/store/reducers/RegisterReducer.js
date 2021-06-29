const INITIAL_STATE = {
  date: '',
  workedHours: 1,
  project: '',
  projects: [],
};

export function registerReducer(state = INITIAL_STATE, action) {
  if (action.type === 'DATE_CHANGED') {
    return {
      ...state,
      date: action.payload.date,
    };
  }

  if (action.type === 'WORKED_HOURS_CHANGED') {
    return {
      ...state,
      workedHours: action.payload.workedHours,
    };
  }

  if (action.type === 'PROJECT_CHANGED') {
    return {
      ...state,
      project: action.payload.project,
    };
  }

  if (action.type === 'REGISTER_WORKED_HOURS_SUCESS') {
    alert('Horas trabalhadas registradas!');
    return state;
  }
  if (action.type === 'REGISTER_WORKED_HOURS_FAILED') {
    alert('Falha ao registrar as horas trabalhadas.');

    return state;
  }

  if (action.type === 'LOAD_PROJECT_SUCCESS') {
    return {
      ...state,
      projects: action.payload.data,
    };
  }
  if (action.type === 'LOAD_PROJECT_FAILED') {
    alert('Falha ao conectar a API.');
    return state;
  }

  return state;
}
