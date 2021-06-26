import React from 'react';
import { Route } from 'react-router';
import LoginPage from './components/LoginPage/LoginPage';
import ProjectPage from './components/ProjectPage/ProjectPage';
import HourRegisterPage from './components/HourRegisterPage/HourRegisterPage';

const routes = () => (
  <div>
    <Route exact path="/" component={LoginPage} />
    <Route path="/projetos" component={ProjectPage} />
    <Route path="/registro-horas" component={HourRegisterPage} />
  </div>
);
export default routes;
