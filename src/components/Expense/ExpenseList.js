import React, { useEffect } from 'react'
import SingleExpense from './SingleExpense'
import classes from './ExpenseList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { expenseActions } from '../../store/expenseSlice'

const ExpenseList = () => {
  const dispatch = useDispatch()
  const expenses = useSelector((state) => state.expense.expenses)

  useEffect(() => {
    async function fetchHandler() {
      const res = await axios.get(
        'https://expense-tracker-app-a5fd4-default-rtdb.firebaseio.com/expenses.json'
      )
      if (res.status === 200) {
        const data = res.data

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
        dispatch(expenseActions.addExpense(loadArray))
        // if (expenses.length === 0) {
        // expenses = loadArray
        // }
      }
    }
    fetchHandler()
  }, [])

  let totalAmount = 0
  if (expenses) {
    totalAmount = expenses.reduce((acc, val) => {
      return (acc += Number(val.money))
    }, 0)
    console.log(totalAmount)
  }

  return (
    <div className={classes.mainList}>
      {totalAmount > 10000 && (
        <button className={classes.premium}>Activate Premium</button>
      )}

      <ul className={classes.list}>
        {expenses.map((each) => {
          return <SingleExpense key={each.id} item={each} />
        })}
      </ul>
    </div>
  )
}

export default ExpenseList
