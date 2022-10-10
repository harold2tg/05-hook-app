
import {useCounter} from '../hook/useCounter'

export const CounterWithCustomHook = () => {
    const {counter} = useCounter()
    return (
    <>
        <h1>Counter With Custom Hook {counter}</h1>

        <button className="btn btn-success">+1</button>
        <button className="btn btn-primary">Reset</button>
        <button className="btn btn-danger">-1</button>


    </>
  )
}
