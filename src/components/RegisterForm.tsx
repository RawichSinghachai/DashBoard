import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";


export default function RegisterForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = handleSubmit(data => console.log(data));

  return (
        <>
          <Card sx={{width:'500px',mx:'auto',my:'auto',p:2}}>
          <Typography variant="h5" >Get started absolutely free.</Typography>
          <Typography variant="subtitle1" sx={{mb:2}}>Already have an account?</Typography>
          
            <form autoComplete='off' onSubmit={onSubmit}>
                <TextField  label="FirstName" variant="outlined" {...register("firstName",{required: true})} sx={{mr:2}}/>
                <TextField  label="LastName" variant="outlined" {...register("lastName",{required: true})} sx={{mb:2}}/>
                <br />
                <TextField label="Phone number" variant="outlined" fullWidth type='text' {...register("phone",{required: true,maxLength:10,minLength:10})}sx={{mb:2}}/>
                <TextField label="E-mail" variant="outlined" fullWidth type='email' {...register("email")} sx={{mb:2}}/>
                <TextField label="Password" variant="outlined" fullWidth type='password'{...register("password")} sx={{mb:2}}/>
                <TextField label="Confirm password" variant="outlined" fullWidth {...register("confirm-password")} type='text' />
                <br />
                <Button variant="contained" type='submit' fullWidth sx={{mr:2,mt:2}}>Log in</Button>
            </form>
          </Card>
        </>
  );
}