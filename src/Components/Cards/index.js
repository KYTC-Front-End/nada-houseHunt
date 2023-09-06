import  React from 'react';
import Cards from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import{Link} from 'react-router-dom'
import './style.css';
export default function Card({house}) {

const {id} = house;


  const [liked, setLiked] = React.useState(false);
  const{  photo, title, price,description,bedroom,bathroom} = house;
  const handleLikeToggle = () => {
    setLiked(!liked);
};
  return (
    <Cards sx={{ maxWidth: 300 }}
    style={{ marginTop: '20px',
    width:'80%',
    margin:'auto'
     }}>
     
      <CardMedia
        sx={{ height: 200}}
        image={photo}
        
      />
          <FavoriteBorderIcon
                        sx={{
                            color: liked ? 'red' : 'white',
                            position: 'absolute',
                            top: '13px',
                            right: '17px',
                            zIndex: 1,
                            fontSize: '30px'
                        }}
                        onClick={handleLikeToggle}
                    />
      <CardContent>
        <Typography component="div" >
          <div className='qq' style={{display:'flex'}}> <HotelIcon  className='icon'/> <p className='w' 
          style={{ color:"#aaa",
          fontSize:"12px",
          marginLeft:"10px",
          marginRight:"10px",
          marginTop:"10",
          }}>bd { bedroom }</p> <BathtubIcon className='icon'/> <p className='w'
          style={{ color:"#aaa",
          fontSize:"12px",
          marginLeft:"10px",
          marginRight:"10px",
          marginTop:"10",
          }}>ba { bathroom }</p> </div>
        </Typography>
        <Typography gutterBottom variant="h5" component="div"
         style={{
                                      alignItems: 'center',
                                      fontWeight: 'bolder',
                                      fontSize: '20px',
                                      color:'#000839'
                                  }}>
        { title }
        </Typography>
        <Typography variant="body2" color="text.secondary"
           style={{
            alignItems: 'center',
            
            fontSize: '12px',
            color: '#777'
        }}>
       {description }
        </Typography>
        <Typography  style={{
                        display:'flex',
                        alignItems:'center' ,
                        justifyContent:'space-between',
                        color:'#000839'
                                  }}>
          <div style={{
            display :'flex'
          }}> <LocationOnIcon style={{marginTop:'10px' }}/>
          <p style={{
            color:'#aaa',
            marginTop:'10px',
            marginRight:'10px'
          }}>Gaza - aldahdouh</p> </div>  <p style={{
            color:'#000839'
          }}>${ price }</p>
        </Typography>
        <Typography  style={{
          
          }}>
           
        <Button
                        size="small"
                        color="primary"
                        style={{
                            backgroundColor: '#B070FF',
                            color:'#fff',
                            fontSize: '10px',
                            width: '50%',
                            height: '30px',
                        }}
                    >
                       <Link to={`/details/${id}`} style={{
                        color:'white',
                        textTransform:'capitalize',
                        textDecoration:'none',
                        fontSize:"15px",
                        backgroundColor:"#B070FF"


                       }}>SeeMore</Link>
                    </Button>
                    
                    <FavoriteBorderIcon style={{color:'#aaa'}}/>
        </Typography>
      </CardContent>
    </Cards>
  );
}