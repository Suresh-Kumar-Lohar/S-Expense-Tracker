import React, { useState, useContext, useEffect } from 'react'
import classes from './UpdateProfile.module.css'
import axios from 'axios'
import AuthContext from '../store/auth-context'

const UpdateProfile = () => {
  const authCtx = useContext(AuthContext)
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.post(
          'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAVz545erTZB78i1xj1UEkV64Wt0UBKjRA',
          { idToken: authCtx.token }
        )
        const user = res.data.users[0]
        console.log(user)
        setName(user.displayName)
        setUrl(user.photoUrl)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const updateHandler = async (e) => {
    e.preventDefault()
    console.log(name, url)
    const data = {
      idToken: authCtx.token,
      displayName: name,
      photoUrl: url,
      returnSecureToken: false,
    }
    const body = JSON.stringify(data)
    console.log(data)
    const resp = await axios.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAVz545erTZB78i1xj1UEkV64Wt0UBKjRA',
      data
    )
    console.log(resp)
    const user = resp.data
    console.log(user)
    setName(user.displayName)
    setUrl(user.photoUrl)
  }

  return (
    <>
      <div className={classes.welcome}>
        <p>
          <i>Winners never quite, Quitters never win</i>
        </p>
        <p className={classes.p2}>
          <i>
            Your Profile is <b>64%</b> completed. A complete Profile has higher
            chances of landing a job. <span>Complete now</span>
          </i>
        </p>
      </div>
      <div className={classes.updateDetails}>
        <div className={classes.header}>
          <h3>Contact Details</h3>
          <button>Cancel</button>
        </div>
        <div className={classes.inputDetails}>
          <div>
            <label htmlFor='name'>Full Name</label>
            <input
              id='name'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='image'>Profile Photo URL</label>
            <input
              id='image'
              type='url'
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
        </div>
        <button onClick={updateHandler}>Update</button>
      </div>
    </>
  )
}

export default UpdateProfile
