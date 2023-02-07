import React from 'react'
import Grid from '@mui/material/Grid';
import ButtonControl from './ButtonControl'
import {Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';




export default function Secondpage() {
  const buttondata = useSelector((state:any)=>state.ButtonStore)
  const statuslogin = useSelector((state:any)=>state.LoginStore.status)

  return (
    <>
      {statuslogin?'':<Navigate to='/login'/>}
      <Grid container spacing={2} sx={{padding:2}}>
        {buttondata.map((data:any,index:any)=>{
          return <Grid item md={3} sm={4} xs={6} key={index}>
                    <ButtonControl name={data.name} id={data.id}/>
                  </Grid>
        })}
          
      </Grid>
    </>
  )
}