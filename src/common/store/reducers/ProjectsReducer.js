const INITIAL_STATE = {
  workedHours: [],
  adminWorkedHours: [],
};

export function projectsReducer(state = INITIAL_STATE, action) {
  if (action.type === 'LOAD_USER_WORKED_HOURS_SUCCESS') {
    const data = action.payload.data;

    const workedHours = data.map((pjt) => {
      return {
        id: pjt[0].id,
        name: pjt[0].name,
        workedHours: pjt[1],
      };
    });

    return {
      ...state,
      workedHours,
    };
  }

  if (action.type === 'LOAD_ADMIN_WORKED_HOURS_FAILED') {
    alert('Falha ao conectar a API');
  }

  if (action.type === 'LOAD_ADMIN_WORKED_HOURS_SUCCESS') {
    const data = action.payload.data;
    const adminWorkedHours = data.map((pjt) => {
      return {
        id: pjt[0],
        name: pjt[1].name,
        user: pjt[2].name,
        workedHours: pjt[3],
      };
    });
    return {
      ...state,
      adminWorkedHours,
    };
  }

  if (action.type === 'LOAD_USER_WORKED_HOURS_FAILED') {
    alert('Falha ao conectar a API');
  }

  if (action.type === 'CLEAR_WORKED_HOURS') {
    return {
      ...state,
      adminWorkedHours: [],
      workedHours: [],
    };
  }
  return state;
}
