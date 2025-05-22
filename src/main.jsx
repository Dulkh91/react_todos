import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { TodosProvider } from './components/context/TodoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

     {/* <App /> */}
    <TodosProvider>
      <App />
    </TodosProvider>
  </StrictMode>,
)
