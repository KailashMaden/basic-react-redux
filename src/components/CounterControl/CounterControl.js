import React from 'react';
import Classes from './CounterControl.module.css';

const counterControl = (props) => (
  <div className={Classes.CounterControl} onClick={props.clicked}>
    {props.label}
  </div>
);

export default counterControl;
