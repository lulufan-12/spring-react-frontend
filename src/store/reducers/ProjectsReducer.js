const INITIAL_STATE = {
  projects: [],
  adminProjects: [],
};

export function projectsReducer(state = INITIAL_STATE, action) {
  if (action.type === 'LOAD_USER_PROJECTS_SUCCESS') {
    const data = action.payload.data;

    const projects = data.map((pjt) => {
      return {
        id: pjt[0].id,
        name: pjt[0].name,
        workedHours: pjt[1],
      };
    });

    return {
      ...state,
      projects: projects,
    };
  }

  /*
  if (action.type === 'LOAD_ADMIN_PROJECTS_FAILED') {
  }
	*/

  if (action.type === 'LOAD_ADMIN_PROJECTS_SUCCESS') {
    const data = action.payload.data;
    const adminProjects = data.map((pjt) => {
      return {
        id: pjt[0],
        name: pjt[1].name,
        user: pjt[2].name,
        workedHours: pjt[3],
      };
    });
    return {
      ...state,
      adminProjects: adminProjects,
    };
  }

  /*
  if (action.type === 'LOAD_USER_PROJECTS_FAILED') {
  }
	*/

  if (action.type === 'CLEAR_PROJECTS') {
    return {
      ...state,
      projects: [],
      adminProjects: [],
    };
  }

  return state;
}
