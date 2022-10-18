import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import {HookApp} from './HookApp'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import {SimpleForm} from './02-useEffect/SimpleForm'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'


ReactDOM.createRoot(document.getElementById('root')).render(
   // {/* <HookApp /> */}
    // {/* <CounterApp/> */}
    // {/* <CounterWithCustomHook/> */}
    // <SimpleForm/>

    // <FormWithCustomHook/>
    // <MultipleCustomHook/>
    // <FocusScreen/>

   <React.StrictMode>
    <Layout/>
    </React.StrictMode>

)
