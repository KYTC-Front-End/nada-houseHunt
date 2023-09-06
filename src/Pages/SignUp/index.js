import React from "react";
import './style.css';
import{Link} from 'react-router-dom';
import Button from '@mui/material/Button';




function SignUp() {

    return(
        <>
        <div style={{display:"flex", justifyContent:"center",gap:"40px", height:'700px',marginLeft:'250px'}}>
        <div style={{display:"flex",
      justifyContent:"center",
      flexDirection:"column",
      marginTop:"10px",
      width:"500px",
      height:'700px',
     
    }}> 
       
        <box className="upbtn">
        <div style={{display:"flex",
      justifyContent:"center",
      flexDirection:"column",
      marginTop:"50px",
      width:"300px",
      height:"200px",
     
    }}>
       
       <h1 style={{textAlign:"center",color:"#000839",marginTop:"-100px"}}> Sign Up</h1>
        <input className="signup-btn" type="text" placeholder="Username"></input>
        <input className="signup-btn" type="text" placeholder="Address"></input>
        <input className="signup-btn" type="text" placeholder="Email address"></input>
        <input  className="signup-btn" type="text" placeholder="Password"></input>
        <input  className="signup-btn" type="text" placeholder="Reset password"></input>
        <Button variant="contained" style={{
                marginRight:'60px',
                marginLeft:'5px',
                marginTop:'20px',
                textTransform:'capitalize',
                backgroundColor:'#7C14FD',
                marginBottom:'20px',
                borderRadius: '30px',
                width:'270px',
                height:'40px',
                padding: '10px',
                borderColor: '#000839',
               outline: 'none',
               color:'#000'
              }}> <Link to='SignUp' style={{textDecoration:'none ', color:'#fff'}}>Sign up</Link></Button>
        </div>
        
        </box>
        <div style={{display:"flex",
        justifyContent:"center",
        alignItems:"center",}}>
        


        </div>
        </div>
        </div>
        </>
    )

   
    
}

export default SignUp;