import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import classes from './SingleExpense.module.css'
import ExpenseContext from '../../store/expense-context'
import AddExpense from './AddExpense'

const SingleExpense = ({ item }) => {
  const history = useHistory()
  const expenseCtx = useContext(ExpenseContext)

  const editHandler = () => {
    expenseCtx.setEditItem(item)
    history.replace('/edit-expense')
  }

  return (
    <div className={classes.item}>
      <li className={classes.listItem}>
        <div className={classes.header}>
          <div className={classes.category}>
            <p>
              <span>Category : </span>
              {item.category}
            </p>
            <p>
              <span>Price : </span>
              {item.money}
            </p>
          </div>
          <div>
            <button onClick={editHandler} className={classes.btn}>
              Edit
            </button>
            <button
              onClick={() => expenseCtx.deleteExpense(item.id)}
              className={classes.btn}
            >
              Delete
            </button>
          </div>
        </div>
        <p>
          <span>Description : </span>
          {item.description}
        </p>
      </li>
    </div>
  )
}

export default SingleExpense
