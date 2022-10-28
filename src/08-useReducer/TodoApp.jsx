import {useReducer, useEffect} from 'react'
import { TodoList } from './TodoList'
import {todoReducer} from './todoReducer'
import { TodoAdd } from './TodoAdd'

const initialState = []

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState,init);
    localStorage.setItem('todos',JSON.stringify( todos ));
    useEffect(() => {
        console.log(todos)
    }, [todos])
    

    const handNewTodo = (todo) => {
        const action = {
            type : '[TODO] Add Todo]',
            payload : todo,
        }
        dispatch(action);


    }
  return (
    <>  
        <h1>TodoApp 10 <small>Pendientes: 2</small></h1>
        <hr />
        <div className="row">
            <div className="col-7">
                <TodoList todos={todos}/>
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4> 
                <hr />
                <TodoAdd oneNewTodo={handNewTodo}/>
            </div>
        </div>        
    </>
  )
}
