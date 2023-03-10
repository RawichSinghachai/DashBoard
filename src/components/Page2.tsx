import React,{useState} from 'react'
import Grid from '@mui/material/Grid';
import ButtonControl from './ButtonControl'
import {Navigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import Slider from '@mui/material/Slider';
import { scale } from '../stores/ButtonStore';
import Button from '@mui/material/Button';


export default function Secondpage() {
  const buttondata = useSelector((state:any)=>state.ButtonStore)
  const statuslogin = useSelector((state:any)=>state.LoginStore.status)

  const [numbt,Setnumbt] = useState()

  const dispatch = useDispatch()

  const somebt = () => {
    dispatch(scale(numbt))
  }

  return (
    <>
      {statuslogin?'':<Navigate to='/login'/>}
      <Grid container spacing={2} sx={{p:2,pt:8}}>

        <Grid item md={12} sm={12} xs={12} >
          <Slider
            aria-label="Temperature"
            defaultValue={10}
            valueLabelDisplay="auto"
            step={5}
            marks
            min={10}
            max={50}
            onChange={(e:any)=>Setnumbt(e.target.value)}
            />
          <Button variant="contained" onClick={()=>somebt()}>Contained</Button>
        </Grid>

        {buttondata.map((data:any,index:number)=>{
          return <Grid item md={3} sm={4} xs={6} key={index}>
                    <ButtonControl name={data.name} id={data.id}/>
                  </Grid>
        })}
          
      </Grid>
    </>
  )
}