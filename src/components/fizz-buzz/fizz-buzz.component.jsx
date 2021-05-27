import React from 'react';

import './fizz-buzz.styles.css';

const FizzBuzz = ({ color, text }) => (
  <div className={`fizz-buzz ${ color }`}>
    <h1>{ text }</h1>
  </div>
);

export default FizzBuzz;