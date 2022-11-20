import React from 'react'
import classes from './SingleExpense.module.css'

const SingleExpense = ({ item }) => {
  return (
    <div className={classes.item}>
      <li className={classes.listItem}>
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
        <p>
          <span>Description : </span>
          {item.description}
        </p>
      </li>
    </div>
  )
}

export default SingleExpense
