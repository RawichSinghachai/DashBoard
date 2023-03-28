import React from 'react'
import Grid from '@mui/material/Grid';
import DataNow from './DataNow';
import TableData from './TableData';
import ChartData from '../charts/ChartData'
import RadiusChart from '../charts/RadiusChart';
import CheckLogIn from '../CheckLogIn';
export default function Home() {



  return (
    <>
      <CheckLogIn />
      <Grid container spacing={2} justifyContent='center' sx={{ p: 2 }} >
        <Grid item laptop={3} mobile={6} >
          <DataNow value={25} type={'Temperature'} />
        </Grid>
        <Grid item laptop={3} mobile={6} >
          <DataNow value={60} type={'Humidity'} />
        </Grid>
        <Grid item laptop={3} mobile={6} >
          <DataNow value={25} type={'Temperature'} />
        </Grid>
        <Grid item laptop={3} mobile={6} >
          <DataNow value={60} type={'Humidity'} />
        </Grid>
        <Grid item laptop={6} tablet={6} mobile={12} >
          <TableData />
        </Grid>
        <Grid item laptop={6} tablet={6} mobile={12} >
          <RadiusChart />
        </Grid>
        <Grid item laptop={12} mobile={12} >
          <ChartData />
        </Grid>
      </Grid>
    </>
  )
}