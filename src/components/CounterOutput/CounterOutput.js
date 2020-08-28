import React from 'react';

import Classes from './CounterOutput.module.css';

const counterOutput = (props) => (
  <div className={Classes.CounterOutput}>Current Counter: {props.value}</div>
);

export default counterOutput;
