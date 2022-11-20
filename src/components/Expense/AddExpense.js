import React, { useState, useContext } from 'react'
import classes from './AddExpense.module.css'
import axios from 'axios'
import ExpenseContext from '../../store/expense-context'

const AddExpense = () => {
  const expenseCtx = useContext(ExpenseContext)
  const [money, setMoney] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Food')

  const submitHandler = async (e) => {
    e.preventDefault()
    if (money && description && category) {
      const expense = {
        money: money,
        description: description,
        category: category,
      }
      expenseCtx.addExpense(expense)
      setCategory('Food')
      setDescription('')
      setMoney('')
    } else {
      alert('Please enter all details...')
    }
  }

  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.formInside}>
          <h2>Enter Your Expense</h2>
          <div className={classes.enterVal}>
            <input
              id='money'
              type='number'
              placeholder='Enter Money'
              value={money}
              onChange={(e) => setMoney(e.target.value)}
            />
          </div>
          <div className={classes.enterVal}>
            <input
              id='desc'
              type='text'
              placeholder='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className={classes.dropdown}>
            <label htmlFor='category'>Category:</label>
            <select
              id='category'
              name='category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value='Food'>Food</option>
              <option value='Petrol'>Petrol</option>
              <option value='Salary'>Salary</option>
            </select>
          </div>
          <button type='Submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddExpense
