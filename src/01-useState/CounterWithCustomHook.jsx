
import {useCounter} from '../hook/useCounter'

export const CounterWithCustomHook = () => {
    const {counter, increment, decrease,reset} = useCounter()
    return (
    <>
        <h1>Counter With Custom Hook {counter}</h1>

        <button className="btn btn-success" onClick={increment}>+1</button>
        <button className="btn btn-primary" onClick={reset}>Reset</button>
        <button className="btn btn-danger" onClick={decrease}>-1</button>


    </>
  )
}
