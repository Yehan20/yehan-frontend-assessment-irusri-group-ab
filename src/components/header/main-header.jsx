import  React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import WavingHandIcon from '@mui/icons-material/WavingHand';

import { links } from '../../data/data';
import { NavLink, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context/auth-context';
import { Button } from '@mui/material';
import LogoText from '../common/logoText';
import theme from '../../theme/theme';


const drawerWidth = 340;


function MainHeader(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

 

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const { user,logout } = useGlobalContext();
  const navigate = useNavigate()

  const handleLogout = ()=>{
    logout()
    navigate('/') 
  }
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center',padding:"20px" }}>
      <Typography textAlign={"left"} variant="h6" sx={{ my: 2 }}>
         Todos
      </Typography>
      <Divider />
      <List>
        {!user && links.map((item) => (
          <ListItem key={item.id} disablePadding>
            <NavLink className={'custom__hover'} to={item.path} >
              <ListItemText sx={{ textDecoration:'none',color:theme.palette.secondary.main ,'&:hover':{
                 fontWeight:800,
                 
              }}} primary={item.name} />
            </NavLink>
          </ListItem>
        ))}
      </List>
      {user && (
            <>
              <Typography gutterBottom sx={{display:"flex",gap:1}}>Welcome {user.name} <WavingHandIcon color='black'/> </Typography>
              <Button onClick={handleLogout} sx={{ marginTop:3,display:"block" }} variant='contained' color="secondary">Logout </Button>
            </>
            )
            }

    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
    
          <LogoText hasLink={true}  size={"40"}/>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: { sm: 4 },alignItems:"center" }}>
            {!user && links.map((item) => (
              <NavLink className={'nav__link'} to={item.path} key={item.id} >
                {item.name}
              </NavLink>
            ))}

            {user && (<>
              <Typography sx={{ margin:0 ,display:"flex",gap:1}}>Welcome {user.name} <WavingHandIcon color='black'/> </Typography>
              <Button onClick={handleLogout} variant='contained' color="secondary">Logout </Button>
            </>
            )
            }
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        
        </Drawer>
    
      </nav>
     

    </Box>
  );
}



export default MainHeader;
