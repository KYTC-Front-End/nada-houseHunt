import  React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import image from '../../util/images/1.jpg';
import SearchIcon from '@mui/icons-material/Search';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
export default function BasicCard() {
  return (
    <Card sx={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        height:'500px',
     }}>
      <CardContent>
        <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            color:'#fff',
            flexDirection:'column',
            marginTop:'200px',
            fontSize:'30px',
        }}>
        <Typography variant="h4" component="div">
        Find The House of Your Dream
        </Typography>
        <Typography variant="h4" component="div">
        Using our Platform
        </Typography>
        <div className="input-container">
            <Box sx={{ marginTop: 2 }}>
            <input type="text" placeholder="Search for the location you want! "
                            style={{
                                width: '500px',
                                height: '45px',
                                border: '0.2px solid #000839',
                                borderRadius: '10px',
                                position: 'relative',
                                paddingLeft:'30px'
                            }}
                      />
                        <SearchIcon style={{
                            color: '#fff',
                            fontSize:'35px',
                            position: 'absolute',
                            backgroundColor:'#B070FF',
                            borderRadius: '5px',
                            zIndex:'2',
                            left:'970px',
                            bottom:'300px'
                        }} />
            </Box>
            </div>
        </div>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}