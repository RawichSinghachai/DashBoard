import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import {useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import MapIcon from '@mui/icons-material/Map';


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

type Props = {
  anchor:string,
  toggleDrawer:any
}

export default function Sidebar({anchor,toggleDrawer}:Props) {


  const navigate = useNavigate()

  return (
    <Box
          sx={{ width: 220 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          
      
        <DrawerHeader>
          <IconButton >
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>

            <ListItem onClick={()=>{navigate('/')}}>
              <ListItemButton>
                <ListItemIcon>
                   <HomeIcon sx={{ fontSize: 35 }}/> 
                </ListItemIcon>
                  <Typography gutterBottom variant="h6" color="themeblue.text">
                      Home
                  </Typography>
              </ListItemButton>
            </ListItem>


            <ListItem onClick={()=>{navigate('/button')}}>
              <ListItemButton>
                <ListItemIcon>
                   <ToggleOnIcon sx={{ fontSize: 35 }}/> 
                </ListItemIcon>
                  <Typography gutterBottom variant="h6" color="themeblue.text">
                    Button
                  </Typography>
              </ListItemButton>
            </ListItem>


            <ListItem onClick={()=>{navigate('/map')}}>
              <ListItemButton>
                <ListItemIcon>
                   <MapIcon sx={{ fontSize: 35 }}/> 
                </ListItemIcon>
                  <Typography gutterBottom variant="h6" color="themeblue.text">
                    Map
                  </Typography>
              </ListItemButton>
            </ListItem>

          
        </List>
        <Divider />

    </Box>
  );
}