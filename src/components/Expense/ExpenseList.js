import React, { useState } from 'react'
import SingleExpense from './SingleExpense'
import classes from './ExpenseList.module.css'

const dummy = [
  {
    money: 250,
    description: 'sdkfw fgfgh sdf sger srgesdfgtr4egbh',
    category: 'Food',
  },
  {
    money: 250,
    description: 'sdpfw fgfgh sdf sger srgesdfgtr4egbh',
    category: 'Food',
  },
  {
    money: 250,
    description: 'sdfw fgfgh sdf sger srgesdfgtr4egbh',
    category: 'Food',
  },
]
const ExpenseList = () => {
  const [expenses, setExpenses] = useState(dummy)
  return (
    <div className={classes.list}>
      <ul>
        {expenses.map((each) => {
          return <SingleExpense key={each.description} item={each} />
        })}
      </ul>
    </div>
  )
}

export default ExpenseList
