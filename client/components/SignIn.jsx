import React, { useState } from 'react'
import { signIn, isAuthenticated } from 'authenticare/client'

import { baseApiUrl as baseUrl } from '../config'
// import { form, label, input, button, Error } from './Styled'

function SignIn (props) {
  
  const [form, setForm] = useState({
    username: '',
    password: ''
  })


  function handleChange (e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleClick (e) {
    e.preventDefault()
    const { username, password } = form
    signIn({ username, password }, { baseUrl })
      .then(() => {
        if (isAuthenticated()) {
          props.history.push('/')
        }
      })
      .catch(err => {
        if (err.message === 'INVALID_CREDENTIALS') {
          alert('Username and password combination not found')
        }
      })
  }
  return (
    <>
      <h2>Sign in</h2>
      <form>
        <label htmlFor='username'>Username:</label>
        <input type='text'
          id='username'
          name='username'
          value={form.username}
          onChange={handleChange} />

        <label htmlFor='password'>Password:</label>
        <input type='password'
          id='password'
          name='password'
          value={form.password}
          onChange={handleChange} />

        <button type='button' onClick={handleClick}>Sign in</button>
      </form>
    </>
  )
}

export default SignIn