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

export default function DataNow({value ,type}:Props) {
  let icon
  if(type){
    if(type === 'Temperature'){
      icon = <ThermostatIcon sx={{ fontSize: 70 }} />
    }
    if(type === 'Humidity'){
      icon = <CloudIcon sx={{ fontSize: 70 }}/>
    }
  }else{
    icon = <DoDisturbOnIcon sx={{ fontSize: 70 }}/>
  }
  // sx={{ width: {mobile:'200px',laptop:'300px'}

  return (
    <Card sx={{ maxWidth:'400 px',px:2,pt:2,}}>
      
        <Stack  direction="row" justifyContent="center" alignItems="center" spacing={2} >
            <Stack>
                <Typography sx={{fontSize:'16px'}}>{type} </Typography>
                <Typography sx={{fontSize:'40px'}} >{value} </Typography>
            </Stack>
              {icon}
        </Stack>

        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={1}>
          <ArrowDropDownIcon sx={{fontSize:'30px',color:'constant.statusOff'}}/>
          <Typography sx={{fontSize:'18px',color:'constant.statusOff'}}>30% </Typography>
          <ArrowDropUpIcon sx={{fontSize:'30px',color:'constant.statusOn'}}/>
          <Typography sx={{fontSize:'18px',color:'constant.statusOn'}}>30% </Typography>
        </Stack>
      
    </Card>
  );
}