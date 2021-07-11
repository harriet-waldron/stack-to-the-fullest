import React from 'react'
import { Link } from 'react-router-dom'
import { logOff } from 'authenticare/client'
import { IfAuthenticated, IfNotAuthenticated } from './Auth'




function Nav () {
  return (
    <>
        <Link to='/'>Home</Link> <br />
        <IfAuthenticated>
          <Link to='#' onClick={logOff}>Log off</Link>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Link to='/register'>Register</Link> <br />
          <Link to='/signin'>Sign in</Link> <br />
        </IfNotAuthenticated>
    </>
  )
}

export default Nav