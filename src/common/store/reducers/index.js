import { combineReducers } from 'redux';
import { projectsReducer } from './ProjectsReducer';
import { loginReducer } from './LoginReducer';
import { registerReducer } from './RegisterReducer';

const rootReducer = combineReducers({
  projectsReducer,
  loginReducer,
  registerReducer,
});

export default rootReducer;
