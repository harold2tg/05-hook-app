import {useState} from 'react'
export const CounterApp = () => {
    const [counter, setCounter] = useState(10);
  return (
    <>
        <h1>Counter: {counter} </h1>
        <hr />
        <button className='btn btn-success' onClick={() => setCounter(counter + 1)}>+1</button>
        <button className='btn btn-danger' onClick={() => setCounter(counter - 1)}>-1</button>
    </>
  )
}