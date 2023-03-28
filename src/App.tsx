// import './App.css';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home'
import Page2 from './components/button/Page2';
import Header from './components/menu/Header';
import Sidebar from './components/menu/Sidebar';
import LogInForm from './components/LogInForm'
import RegisterForm from './components/RegisterForm'
import { useSelector } from 'react-redux';
import Drawer from '@mui/material/Drawer';
import Map from './components/map/Map'
import TestFeature from './components/TestFeature'



function App() {
  const statuslogin = useSelector((state: any) => state.LoginStore.status)

  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor: string, open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  return (
    <>
      <Box sx={{ mt:6, display: 'flex', justifyContent: 'center' }}>
        <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
          <Sidebar anchor={'left'} toggleDrawer={toggleDrawer} />
        </Drawer>
        {statuslogin && <Header toggleDrawer={toggleDrawer} />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogInForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/button" element={<Page2 />} />
          <Route path="/map" element={<Map />} />
          <Route path="/test" element={<TestFeature />} />
        </Routes>


      </Box>
    </>
  );
}

export default App;
