import React from 'react'
import {Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function Testlogin() {
    const statuslogin = useSelector((state:any)=>state.LoginStore.status)
    console.log(statuslogin);
  return (
    <div>
        {statuslogin?<Navigate to='/dashboard'/>:<Navigate to='/login'/>}
    </div>
  )
}
