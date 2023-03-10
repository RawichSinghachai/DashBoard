// import './App.css';
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home'
import Page2 from './components/Page2';
import Header from './components/menu/Header';
import Sidebar from './components/menu/Sidebar';
import FormLogIn from './components/FormLogIn'
import FormLogOut from './components/FormLogOut'
import { useSelector } from 'react-redux';
import Testlogin from './Testlogin'







function App() {
  const statuslogin = useSelector((state:any) => state.LoginStore.status)


// const drawerWidth = 200;
  let drawerWidth:number 
  if(statuslogin === true){
    drawerWidth = 200
  }if(statuslogin === false){
    drawerWidth = 0
  }

  
  type appbar = {
    theme?:any,
    open:boolean
  }

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }:appbar) => ({
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height:800,
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };




  return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          {statuslogin && <Header open={open} onhandleDrawerOpen={handleDrawerOpen}/>}
          {statuslogin && <Sidebar open={open} setOpen={setOpen} onhandleDrawerClose={handleDrawerClose}/>}

          <Main open={open} sx={{pt:8 ,height:'100%',width:'100%'}}>
          {!statuslogin && <DrawerHeader />}
          
          
          
          <Routes>
              <Route path='/' element={<Testlogin/>}/>
              <Route path="/login" element={<FormLogIn/>} />
              <Route path="/logout" element={<FormLogOut/>} />
              <Route path="/dashboard" element={<Home/>}/>
              <Route path="/button" element={<Page2/>} />       
          </Routes>
          </Main>

        </Box>    
  );
}

export default App;
