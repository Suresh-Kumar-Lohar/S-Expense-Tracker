import React, { useState } from 'react'
import classes from './AddExpense.module.css'

const AddExpense = () => {
  const [money, setMoney] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Food')

  const submitHandler = (e) => {
    e.preventDefault()
    // if()
    console.log(money, description, category)
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
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddExpense
