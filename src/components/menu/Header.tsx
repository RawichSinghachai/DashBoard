import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import {useNavigate } from "react-router-dom";
import Profile from './Profile';


const AppBar = styled(MuiAppBar)
(({ theme}:any) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));




export default function Header({toggleDrawer}:any) { 
    const navigate = useNavigate()

  return (
<AppBar position="fixed">
    <Toolbar sx={{display:'flex' , justifyContent:'space-between'}}>
        <Stack direction="row" alignItems="center">
            <IconButton color="inherit" aria-label="open drawer" onClick={toggleDrawer('left', true)} edge="start">
                <MenuIcon />
            </IconButton>

        
            <Typography sx={{":hover":{cursor:'pointer'},fontSize:20,pl:2}} onClick={()=>navigate('/')}>
              Dashboard
            </Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2} sx={{mr:2}}>
            <Profile/>
        </Stack>

    </Toolbar>
    </AppBar>
  );
}