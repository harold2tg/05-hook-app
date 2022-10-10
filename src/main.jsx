import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import {HookApp} from './HookApp'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HookApp /> */}
    {/* <CounterApp/> */}
    <CounterWithCustomHook/>
  </React.StrictMode>
)
