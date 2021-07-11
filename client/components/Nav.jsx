import React from 'react'
import { Link } from 'react-router-dom'
import { logOff } from 'authenticare/client'
import { IfAuthenticated, IfNotAuthenticated } from './Auth'




function Nav () {
  return (
    <>
        <Link to='/'>Home</Link>
        <IfAuthenticated>
          <Link to='#' onClick={logOff}>Log off</Link>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Link to='/register'>Register</Link>
          <Link to='/signin'>Sign in</Link>
        </IfNotAuthenticated>
    </>
  )
}

export default Nav