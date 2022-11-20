import Header from './components/Header/Header'
import SignUp from './pages/signUp/SignUp'
import { Route, Redirect } from 'react-router-dom'
import Welcome from './pages/Welcome'
import UpdateProfile from './pages/UpdateProfile'
import Verify from './pages/signUp/Verify'
import ForgotPassword from './pages/signUp/ForgotPassword'

function App() {
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
        <Welcome />
      </Route>
      <Route path='/verify'>
        <Verify />
      </Route>
      <Route path='/updateProfile'>
        <UpdateProfile />
      </Route>
      <Route path='/forgot-password'>
        <ForgotPassword />
      </Route>
    </div>
  )
}

export default App
