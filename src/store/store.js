import { configureStore } from '@reduxjs/toolkit'
import expenseReducer from './expenseSlice'
import authReducer from './authSlice'

const store = configureStore({
  reducer: { expense: expenseReducer, auth: authReducer },
})

export default store
