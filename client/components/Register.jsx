import React, { useState } from 'react'
import { register, isAuthenticated } from 'authenticare/client'
import { baseApiUrl as baseUrl } from '../config'


function Register (props) {
  
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
    register({ username, password }, { baseUrl })
      .then(() => {
        if (isAuthenticated()) {
          props.history.push('/')
        }
        return null
      })
      .catch(err => {
        if (err.message === 'USERNAME_UNAVAILABLE') {
          MediaStreamErrorEvent('Username is not available')
        }
        return null
      })
  }

  return (
    <>
      <h2>Register</h2>
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

        <button type='button' onClick={handleClick}>Register</button>
      </form>
    </>
  )
}

export default Register