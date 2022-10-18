import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import {HookApp} from './HookApp'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import {SimpleForm} from './02-useEffect/SimpleForm'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHook } from './03-examples/MultipleCustomHook'

ReactDOM.createRoot(document.getElementById('root')).render(
   // {/* <HookApp /> */}
    // {/* <CounterApp/> */}
    // {/* <CounterWithCustomHook/> */}
    // <SimpleForm/>

    // <FormWithCustomHook/>

   <React.StrictMode>
    
    <MultipleCustomHook/>
    </React.StrictMode>

)
