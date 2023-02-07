import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';


export default function FormLogOut() {


  return (
        <>
          <Card sx={{width:'500px',mx:'auto',my:'auto',p:2}}>
          <Typography variant="h5" >Get started absolutely free.</Typography>
          <Typography variant="subtitle1" sx={{mb:2}}>Already have an account?</Typography>
            <form autoComplete='off'>
                <TextField  label="Name" variant="outlined" sx={{mr:2}}/>
                <TextField  label="Password" variant="outlined"  />
                <br />
                <TextField label="E-mail" variant="outlined" fullWidth  sx={{my:2}}/>
                <TextField label="Password" variant="outlined" fullWidth type='password'/>
                <br />
                <Button variant="contained" type='submit' fullWidth sx={{mr:2,mt:2}}>Log in</Button>
            </form>
          </Card>
        </>
  );
}