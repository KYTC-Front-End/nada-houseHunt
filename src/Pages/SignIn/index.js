import React from "react";
import './style.css'
import { Button } from "@mui/material";

function SignIn() {


    return(
        <>
       
        <div style={{display:"flex", justifyContent:"center",gap:"40px", marginLeft:'300px', marginBottom:'100px'}}>

        <div style={{display:"flex",
      justifyContent:"center",
      flexDirection:"column",
      marginTop:"70px",
      width:"500px",
      height:"200px",
     
    }}>
        <h1 style={{textAlign:"center",color:"#000839",marginRight:'200px'}}>Sign_In</h1>
        <input className="signbtn" type="text" placeholder="Username"></input>
        <input className="signbtn" type="text" placeholder="Password"></input>
              <Button variant="contained" style={{backgroundColor:"#7C14FD",
        color:"#fff",
        textAlign:"center",
        fontSize:"20px",
        width:'300px',
        borderRadius: '30px'
    }}  className="signbtn" >Sign in</Button>    
        </div>
        </div>
        </>
    )

   
    
}

export default SignIn;