import { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback(
    (value) => {
      console.log('setCounter(counte+1')
      setCounter((c) => c + value);
    },
    [],
  )
  

  // const incrementFather = ()=>{
  //   setCounter(counter + 1);
  // }
  return (
    <>
    <h1>Callback Hook: {counter}</h1>
    <ShowIncrement increment={incrementFather}/>
    </>
  )
}
