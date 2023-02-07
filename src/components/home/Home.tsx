import React from 'react'
import Grid from '@mui/material/Grid';
import DataNow from './DataNow';
import TableData from './TableData';
import ChartData from '../charts/ChartData'
import {Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import RadiusChart from '../charts/RadiusChart';

export default function Home() {

  const statuslogin = useSelector((state:any)=>state.LoginStore.status)
    
  return (
    <>
      {statuslogin?'':<Navigate to='/login'/>}
      <Grid container spacing={2} justifyContent='center' sx={{p:2}} >
          <Grid item md={3} xs={6} >
            <DataNow value={25} type={'Temperature'}/>
          </Grid>
          <Grid item md={3} xs={6} >
            <DataNow value={60} type={'Humidity'}/>
          </Grid>
          <Grid item md={3} xs={6} >
            <DataNow value={25} type={'Temperature'}/>
          </Grid>
          <Grid item md={3} xs={6} >
            <DataNow value={60} type={'Humidity'}/>
          </Grid>
          <Grid item md={9} sm={6} xs={12} >
            <TableData/>
          </Grid>
          <Grid item md={3} sm={6} xs={12} >
            <RadiusChart/>
          </Grid>
          <Grid item md={12} xs={12} >
            <ChartData/>
          </Grid>
      </Grid>
    </>
  )
}