import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Tasksprovider from './context/TasksContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Tasksprovider>
      <App />
    </Tasksprovider>
  </React.StrictMode>
)
