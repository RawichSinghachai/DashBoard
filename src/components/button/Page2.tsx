import React,{useState,useEffect} from 'react'
import Grid from '@mui/material/Grid';
import ButtonControl from './ButtonControl'
import { useSelector,useDispatch } from 'react-redux';
import Slider from '@mui/material/Slider';
import { scale } from '../../stores/ButtonStore';
import Button from '@mui/material/Button';
import { AppDispatch } from '../../stores/store';
import CheckLogIn from '../CheckLogIn';

export default function Secondpage() {
  const buttondata = useSelector((state:any)=>state.ButtonStore)


  const [numbt,Setnumbt] = useState()

  const dispatch = useDispatch<AppDispatch>()

  const somebt = () => {
    dispatch(scale(numbt))
  }

useEffect(() => {
  <CheckLogIn/>
}, [])




  return (
    <>
      <Grid container spacing={2} sx={{p:2}}>

        <Grid item laptop={12} tablet={12} mobile={12} >
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
          return <Grid item laptop={3} tablet={4} mobile={6} key={index}>
                    <ButtonControl name={data.name} id={data.id} />
                  </Grid>
        })}
          
      </Grid>
    </>
  )
}