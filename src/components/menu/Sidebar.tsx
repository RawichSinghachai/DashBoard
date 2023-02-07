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
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PaymentIcon from '@mui/icons-material/Payment';
import FolderIcon from '@mui/icons-material/Folder';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import {useNavigate } from "react-router-dom";

const drawerWidth = 200;






const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Sidebar({open , onhandleDrawerClose ,setOpen}:any) {
  const theme = useTheme();

  const handleDrawerClose = () => {
    onhandleDrawerClose()
  };

  const closeMenu = () =>{
    setOpen(false)
}

  const navigate = useNavigate()

  return (
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>

            <ListItem onClick={()=>{navigate('/dashboard'),closeMenu()}}>
              <ListItemButton>
                <ListItemIcon>
                   <HomeIcon /> 
                </ListItemIcon>
                  <Typography gutterBottom variant="h6" color="themeblue.text">
                      Home
                  </Typography>
              </ListItemButton>
            </ListItem>


            <ListItem onClick={()=>{navigate('/button'),closeMenu()}}>
              <ListItemButton>
                <ListItemIcon>
                   <SchoolIcon /> 
                </ListItemIcon>
                  <Typography gutterBottom variant="h6" color="themeblue.text">
                    Button
                  </Typography>
              </ListItemButton>
            </ListItem>

          
        </List>
        <Divider />
      </Drawer>

  );
}