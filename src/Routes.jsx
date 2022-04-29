import React from 'react';
import { Route } from 'react-router';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import HourRegisterPage from './pages/HourRegisterPage/HourRegisterPage';

const routes = () => (
  <div>
    <Route exact path="/" component={ProjectPage} />
    <Route path="/registro-horas" component={HourRegisterPage} />
  </div>
);
export default routes;
