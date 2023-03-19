import React from 'react'
import {Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
type Props = {}

export default function CheckLogIn({}: Props) {
    const statuslogin = useSelector((state:any)=>state.LoginStore.status)
  return (
    <>
        {statuslogin?'':<Navigate to='/login'/>}
    </>
  )
}