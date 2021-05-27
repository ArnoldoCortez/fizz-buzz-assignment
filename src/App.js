import React from 'react';
import './App.css';

import FizzBuzz from './components/fizz-buzz/fizz-buzz.component';

const App = () => {

  // const [count, setCount] = useState(1);
  // const [color, setColor] = useState('');
  // const [text, setText] = useState('None');

  // useEffect(() => {
  //   setInterval(() => {
  //     setCount(prevCount => prevCount === 100 ? prevCount=1 : prevCount + 1);
  //   } , 1500);
  // },[]);

  // useEffect(() => {
  //   setColor(count%3===0 && count%5===0 ? 'green': count%3===0 ? 'red': count%5===0 ? 'yellow' : '');
  //   setText(count%3===0 && count%5===0 ? 'Fizz-Buzz': count%3===0 ? 'Fizz': count%5===0 ? 'Buzz' : 'None');
  // },[count]);

  return (
    <div className='App'>
      {
        new Array(100).fill(0).map((_, i) => {
          const num = i+1;
          return num%3===0 && num%5===0 ? <FizzBuzz key={ num } color='green' text='Fizz-Buzz' /> 
          : num%3===0 ? <FizzBuzz key={ num } color='red' text='Fizz' /> 
          : num%5 === 0 ? <FizzBuzz key={ num } color='yellow' text='Buzz' />
          : <FizzBuzz key={ num } color='' text={ num } />
        })  
      }
    </div>
  );
}

export default App;
