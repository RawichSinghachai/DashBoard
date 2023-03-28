import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import CloudIcon from '@mui/icons-material/Cloud';
import Stack from '@mui/material/Stack';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type Props = {
  value:number,
  type:string
}
//{laptop:70 ,tablet:70,mobile:50 }
export default function DataNow({value ,type}:Props) {
  let icon
  if(type){
    if(type === 'Temperature'){
      icon = <ThermostatIcon sx={{ fontSize: {laptop:70 ,tablet:70,mobile:50 } }} />
    }
    if(type === 'Humidity'){
      icon = <CloudIcon sx={{ fontSize: {laptop:70 ,tablet:70,mobile:50 } }}/>
    }
  }else{
    icon = <DoDisturbOnIcon sx={{ fontSize: {laptop:70 ,tablet:70,mobile:50 } }}/>
  }
  // sx={{ width: {mobile:'200px',laptop:'300px'}
//{laptop:2 ,tablet:2,mobile:0 }
  return (
    <Card sx={{ maxWidth:'400 px',px:2,pt:2,}}>
      
        <Stack  direction="row" justifyContent="center" alignItems="center" spacing={{laptop:2 ,tablet:2,mobile:0 }} >
            <Stack>
                <Typography sx={{fontSize:{laptop:'16px' ,tablet:'16px',mobile:'12px' }}}>{type} </Typography>
                <Typography sx={{fontSize:{laptop:'40px' ,tablet:'40px',mobile:'30px' }}} >{value} </Typography>
            </Stack>
              {icon}
        </Stack>

        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={1}>
          <ArrowDropDownIcon sx={{fontSize:{laptop:'30px' ,tablet:'30px',mobile:'20px'},color:'constant.statusOff'}}/>
          <Typography sx={{fontSize:{laptop:'18px' ,tablet:'18px',mobile:'16px'},color:'constant.statusOff'}}>30% </Typography>
          <ArrowDropUpIcon sx={{fontSize:{laptop:'30px' ,tablet:'30px',mobile:'20px'},color:'constant.statusOn'}}/>
          <Typography sx={{fontSize:{laptop:'18px' ,tablet:'18px',mobile:'16px'},color:'constant.statusOn'}}>30% </Typography>
        </Stack>
      
    </Card>
  );
}