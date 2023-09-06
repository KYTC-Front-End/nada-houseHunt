import  React from 'react';
import {AppBar ,Box,Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Imagelogo from '../../util/images/logo.png';
import{Link} from 'react-router-dom';
import './style.css'


function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{
      backgroundColor:'#EBDBFF'
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         

         <img src={Imagelogo} alt="" width={130}/>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             
            </Menu>
          </Box>
         


            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',justifyContent:'center' } }}>
          
              <Button
              
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block',textTransform:'capitalize' }}
              > 

              <Link to='/' className='btn-nav'>
              House
              </Link>
               
              </Button>



              <Button
              
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'black', display: 'block',textTransform:'capitalize' }}
            >

            <Link to='/about' className='btn-nav'>
              AboutUs
              </Link>
             
            </Button>
         
          </Box> 




          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>

              <Button variant="contained" style={{
                marginRight:'5px',
                marginLeft:'5px',
                textTransform:'capitalize',
                backgroundColor:'#B070FF'
              }}><Link to='SignIn'>Sign in</Link></Button>

              <Button variant="contained" style={{
                marginRight:'5px',
                marginLeft:'5px',
                textTransform:'capitalize',
                backgroundColor:'#B070FF'
              }}><Link to='SignUp'>Sign up</Link></Button>


              
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;