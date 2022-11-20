import { useContext } from 'react'
import Header from './components/Header/Header'
import SignUp from './pages/signUp/SignUp'
import { Route, Redirect } from 'react-router-dom'
import Welcome from './pages/Welcome'
import UpdateProfile from './pages/UpdateProfile'
import Verify from './pages/signUp/Verify'
import ForgotPassword from './pages/signUp/ForgotPassword'
import ExpensePage from './pages/ExpensePage/ExpensePage'
import AuthContext from './store/auth-context'
import EditExpense from './pages/ExpensePage/EditExpense'

function App() {
  const authCtx = useContext(AuthContext)

  return (
    <div>
      <Header />
      <Route path='/' exact>
        <Redirect to='/login' />
      </Route>
      <Route path='/login'>
        <SignUp />
      </Route>
      <Route path='/welcome'>
        {!authCtx.isLoggedIn && <Redirect to='/login' />}
        {authCtx.isLoggedIn && <Welcome />}
      </Route>
      <Route path='/verify'>
        <Verify />
      </Route>
      <Route path='/updateProfile'>
        {!authCtx.isLoggedIn && <Redirect to='/login' />}
        {authCtx.isLoggedIn && <UpdateProfile />}
      </Route>
      <Route path='/forgot-password'>
        <ForgotPassword />
      </Route>
      <Route path='/expenses'>
        {!authCtx.isLoggedIn && <Redirect to='/login' />}
        {authCtx.isLoggedIn && <ExpensePage />}
      </Route>
      <Route path='/edit-expense'>
        {!authCtx.isLoggedIn && <Redirect to='/login' />}
        {authCtx.isLoggedIn && <EditExpense />}
      </Route>
    </div>
  )
}

export default App
