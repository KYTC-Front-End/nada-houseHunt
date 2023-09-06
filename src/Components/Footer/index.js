import  React from 'react';
import {AppBar ,Toolbar } from '@mui/material';

import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';



const pages = ["links",'Houses', 'AboutUs'];
const settings = ['Profile', 'Favorite', 'Logout'];

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
    <AppBar position="static" className='FOOTER' style={{backgroundColor:'#EBDBFF'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           
          </Typography>

       
          <div style={{textAlign:"center",}}>
     
          <Typography variant="P"  align="center" style={{ color:'#000',textAlign:"center",  marginLeft:'650px'}}>
                &copy; {new Date().getFullYear()} Nada AbdAljawad
            </Typography>
            </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;