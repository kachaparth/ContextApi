import React, { useContext } from 'react'
import UserContext from '../usercontext/usercontext'

function Profile() {

  const {user}  =  useContext(UserContext)
    return (
    <>
    User: {user.username}  password: {user.password}
    
    </>
    )
}

export default Profile
