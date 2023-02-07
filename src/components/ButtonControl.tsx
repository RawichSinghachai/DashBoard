import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { useSelector,useDispatch} from 'react-redux'
import {on,off} from '../stores/ButtonStore'
import { lightGreen } from '@mui/material/colors';
import { red } from '@mui/material/colors';


export default function ButtonControl({name , id}:any) {
  const dispatch = useDispatch()

  const clickOn = (id:any) =>{
    dispatch(on(id))

  }

  const clickOff = (id:any) =>{
    dispatch(off(id))

  }



  const button = useSelector((state:any)=>state.ButtonStore)


  return (
    <Card sx={{Width:'100%' , borderRadius:3, }}>
      <CardContent>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            {name}
          </Typography>
        </Stack>

        <Stack  direction="row" justifyContent="center" alignItems="center" spacing={1}>
          {button[id-1].value === 'ON'? <FiberManualRecordIcon sx={{ color: lightGreen['A400'] }}/>:<FiberManualRecordIcon sx={{ color: red['A400'] }}/>}

          <Typography sx={{ fontSize: 20 }} color="text.secondary" >
            {button[id-1].value}
          </Typography>
        </Stack>
      </CardContent>
      <Divider/>
      <Stack spacing={2} direction={{md:'row' ,sm:'row', xs:'column'}} justifyContent="space-around" sx={{margin:2}}>
        <Button variant="contained" color="success" onClick={()=>(clickOn(id))}>ON</Button>

        <Button variant="contained" color="error" onClick={()=>(clickOff(id))}>OFF</Button>
      </Stack>

    </Card>
  );
}



