import React from 'react';
import { Switch as RouterSwitch } from 'react-router';
import Routes from './Routes';

const Switch = () => (
  <RouterSwitch>
    <Routes />
  </RouterSwitch>
);

export default Switch;
