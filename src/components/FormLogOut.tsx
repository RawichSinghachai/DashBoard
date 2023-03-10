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
                <TextField  label="FirstName" variant="outlined" sx={{mr:2}}/>
                <TextField  label="LastName" variant="outlined"  />
                <br />
                <TextField label="Password" variant="outlined" fullWidth type='password' sx={{my:2}}/>
                <TextField label="E-mail" variant="outlined" fullWidth  />
                <br />
                <Button variant="contained" type='submit' fullWidth sx={{mr:2,mt:2}}>Log in</Button>
            </form>
          </Card>
        </>
  );
}