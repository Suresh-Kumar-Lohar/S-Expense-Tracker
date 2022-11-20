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
        <li>HOME</li>
        <li>PRODUCTS</li>
        <li>ABOUT Us</li>
        {authCtx.isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
      </ul>
    </header>
  )
}

export default Header
