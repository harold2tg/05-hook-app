import {useReducer, useEffect} from 'react'
import { TodoList } from './TodoList'
import {todoReducer} from './todoReducer'
import { TodoAdd } from './TodoAdd'
import { useTodo } from '../hook/useTodo'



export const TodoApp = () => {

    const {todos, todosCount, pendingTodosCount ,handDeleteTodo,handNewTodo,handToggleTodo} = useTodo();
    
  return (
    <>  
        <h1>TodoApp {todosCount} <small>Pendientes: {pendingTodosCount}</small></h1>
        <hr />
        <div className="row">
            <div className="col-7">
                <TodoList 
                    todos={todos} 
                    onDeleteTodo={handDeleteTodo}
                    onToggleTodo={handToggleTodo}
                />
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
