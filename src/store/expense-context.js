import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ExpenseContext = React.createContext({
  expenses: [],
  editData: {},
  addExpense: () => {},
  deleteExpense: (id) => {},
  editExpense: () => {},
})

export const ExpenseContextProvider = (props) => {
  const [expenses, setExpenses] = useState([])
  const [editData, setEditData] = useState({})

  useEffect(() => {
    fetchHandler()
  }, [])

  async function fetchHandler() {
    try {
      const resp = await axios.get(
        'https://expense-tracker-app-a5fd4-default-rtdb.firebaseio.com/expenses.json'
      )
      const data = resp.data

      const loadArray = []

      for (const key in data) {
        const parsedData = JSON.parse(data[key].body)
        // console.log(parsedData)
        loadArray.unshift({
          id: key,
          money: parsedData.money,
          description: parsedData.description,
          category: parsedData.category,
        })
      }
      console.log(loadArray)
      setExpenses([...loadArray])

      if (resp.status === 200) {
      } else {
        alert('Something went wrong please Refresh Page...')
      }
    } catch (error) {
      window.alert('Something went wrong please Refresh Page...')
      console.log(error.message)
    }
  }

  const addExpenseHandler = async (expense) => {
    try {
      const resp = await axios.post(
        'https://expense-tracker-app-a5fd4-default-rtdb.firebaseio.com/expenses.json',
        {
          body: JSON.stringify(expense),
          headers: {
            'content-type': 'application/json',
          },
        }
      )
      if (resp.status === 200) {
        await fetchHandler()
      } else {
        alert('Something went wrong...')
      }
    } catch (error) {
      window.alert('Please try again...')
      console.log(error.message)
    }
  }

  const deleteExpenseHandler = async (id) => {
    try {
      const resp = await axios.delete(
        `https://expense-tracker-app-a5fd4-default-rtdb.firebaseio.com/expenses/${id}.json`
      )
      console.log(resp)
      if (resp.status === 200) {
        console.log('ExpenseDeleted successfully...')
        await fetchHandler()
      } else {
        alert('Something went wrong please try again...')
      }
    } catch (error) {
      window.alert('Something went wrong please try again...')
      console.log(error.message)
    }
  }

  const editExpenseHandler = async (item) => {
    try {
      const resp = await axios.delete(
        `https://expense-tracker-app-a5fd4-default-rtdb.firebaseio.com/expenses/${editData.id}.json`
      )
      console.log(resp)
      if (resp.status === 200) {
        console.log('ExpenseDeleted successfully...')
      } else {
        alert('Something went wrong please try again...')
      }
    } catch (error) {
      window.alert('Something went wrong please try again...')
      console.log(error.message)
    }
    await addExpenseHandler(item)
    setEditData({})
  }

  const setEditDataHandler = (item) => {
    setEditData(item)
  }

  const contextValue = {
    expenses: expenses,
    editData: editData,
    addExpense: addExpenseHandler,
    fetchExpenses: fetchHandler,
    deleteExpense: deleteExpenseHandler,
    setEditItem: setEditDataHandler,
    editExpense: editExpenseHandler,
  }

  return (
    <ExpenseContext.Provider value={contextValue}>
      {props.children}
    </ExpenseContext.Provider>
  )
}

export default ExpenseContext
