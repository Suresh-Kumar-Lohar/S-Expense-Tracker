import Header from './components/Header/Header'
import SignUp from './pages/SignUp'
import { Route, Redirect } from 'react-router-dom'
import Welcome from './pages/Welcome'
import UpdateProfile from './pages/UpdateProfile'

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
      <Route path='/updateProfile'>
        <UpdateProfile />
      </Route>
    </div>
  )
}

export default App
