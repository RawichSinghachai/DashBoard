import React,{useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useSelector,useDispatch } from 'react-redux';
import {Navigate } from 'react-router-dom'
import { Link ,useLocation } from 'react-router-dom';
import ImageListItem from '@mui/material/ImageListItem';
import Paper from '@mui/material/Paper';



export default function LogInForm() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')


    const dispatch = useDispatch()

    const submitForm = (e:any) => {
      e.preventDefault()
    }


    const statuslogin:boolean = useSelector((state:any)=>state.LoginStore.status)

    

  return (
    <div>
      {statuslogin?<Navigate to='/'/>:''}
    <Card sx={{width:{md:1000,sm:700,},mx:'auto',p:2,}} elevation={12}>
      <Stack direction="row" justifyContent="flex-start" alignItems="center" >

          <ImageListItem sx={{ width:{md:500,sm:350,xs:0}, maxHeight: 500 ,pr:{md:2,sm:2,xs:0}}}>
            <img src='https://i.pinimg.com/736x/f1/94/59/f19459f518dcedcf5da062dfd6db615d.jpg'/>
          </ImageListItem>


        <Paper elevation={0} sx={{width:{md:500,sm:350,}, maxHeight: 500 ,}}>

          <Stack  direction="column" justifyContent="center" alignItems="center" spacing={2}>
            <Typography variant="h4" gutterBottom>Login</Typography>
          </Stack>

          <form autoComplete='off' >
            <TextField  label="Name" variant="outlined" helperText="Incorrect entry." fullWidth sx={{mb:2}}
             />

            <TextField  label="Password" variant="outlined" fullWidth sx={{mb:2}}
              value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <Stack  direction="row" justifyContent="flex-end" alignItems="center" spacing={2} sx={{mb:1}}>
              <Typography variant="body2" gutterBottom>Forget Password?</Typography>
            </Stack>

              <Button variant="contained" fullWidth type='submit'>Submit</Button>

          </form>
          
          <Stack  direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{mt:2}}>
            <Typography variant="body2" gutterBottom><Link to='/register'>Create Account?</Link></Typography>
          </Stack>

        </Paper>

      </Stack>
    </Card>
</div>
  );
}