import React from 'react';

import './fizz-buzz.styles.css';

const FizzBuzz = ({ count, color, text }) => (
  <div class={`fizz-buzz ${ color }`}>
    <h1>{ text }</h1>
    <span>{ count }</span>
  </div>
);

export default FizzBuzz;