import React, { useContext } from 'react'
import classes from './Header.module.css'
import { NavLink, useHistory } from 'react-router-dom'
import AuthContext from '../../store/auth-context'
const Header = () => {
  const authCtx = useContext(AuthContext)
  const history = useHistory()

  const logoutHandler = (e) => {
    e.preventDefault()

    authCtx.logout()
    history.replace('/login')
  }

  return (
    <header className={classes.header}>
      <ul className={classes.navList}>
        <NavLink to='/welcome' activeClassName={classes.active}>
          <li>HOME</li>
        </NavLink>
        <NavLink to='/expenses' activeClassName={classes.active}>
          <li>Expenses</li>
        </NavLink>
        <NavLink to='/updateProfile' activeClassName={classes.active}>
          <li>Profile</li>
        </NavLink>
        {authCtx.isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
      </ul>
    </header>
  )
}

export default Header
