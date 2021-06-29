const INITIAL_STATE = {
  date: null,
  workedHours: 1,
  project: '',
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

  if (action.type === 'REGISTER_WORKED_HOURS') {
    const date = state.date;
    const workedHours = state.workedHours;
    const project = state.project;
    alert(
      'Data: ' +
        date +
        ' || Horas Trabalhadas: ' +
        workedHours +
        ' || Número do Projeto: ' +
        project
    );
    return state;
  }

  return state;
}
