import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './store/auth-context'
import { ExpenseContextProvider } from './store/expense-context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ExpenseContextProvider>
    <AuthContextProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </AuthContextProvider>
  </ExpenseContextProvider>
)
