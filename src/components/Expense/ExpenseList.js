import React, { useContext } from 'react'
import SingleExpense from './SingleExpense'
import classes from './ExpenseList.module.css'
import axios from 'axios'
import ExpenseContext from '../../store/expense-context'

const ExpenseList = () => {
  const expenseCtx = useContext(ExpenseContext)
  return (
    <div className={classes.list}>
      <ul>
        {expenseCtx.expenses.map((each) => {
          return <SingleExpense key={each.id} item={each} />
        })}
      </ul>
    </div>
  )
}

export default ExpenseList
