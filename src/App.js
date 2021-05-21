import React, { useEffect, useState } from 'react';
import './App.css';

import FizzBuzz from './components/fizz-buzz/fizz-buzz.component';

const App = () => {

  const [count, setCount] = useState(1);
  const [color, setColor] = useState('');
  const [text, setText] = useState('None')

  useEffect(() => {
    setInterval(() => {
      setCount(prevCount => prevCount === 100 ? prevCount=1 : prevCount + 1);
    } , 1500);
  },[]);

  useEffect(() => {
    setColor(count%3===0 && count%5===0 ? 'green': count%3===0 ? 'red': count%5===0 ? 'yellow' : '');
    setText(count%3===0 && count%5===0 ? 'Fizz-Buzz': count%3===0 ? 'Fizz': count%5===0 ? 'Buzz' : 'None');
  },[count]);

  return (
    <div className='App'>
      <FizzBuzz count={ count } color={ color } text={ text } />
    </div>
  );
}

export default App;
