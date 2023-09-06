import React from "react";
import { useParams } from 'react-router-dom';
import{ useEffect, useState } from 'react'
import BathtubIcon from '@mui/icons-material/Bathtub';


const Details = ()=>{
    const { id } = useParams();


  const [house, setHouse] = useState([]);
  const getHouse = async () => {
      const response = await fetch(`https://my-json-server.typicode.com/saharyazji2001/mock-api/house/${id}`);
      const FinalData = await response.json();
      setHouse(FinalData)
  }



      
  useEffect(() => {
  getHouse();
   }, [id]
    );

    return(
        <>

        <img src={house.photo} alt="" style={{width:'100%',height:"60vh"}}/>

        <h1 style={{color:" #000839"}}>{house.title}</h1>
<div style={{display:"flex"}}>
        <p><BathtubIcon/>bd { house.bedroom }</p>
        <p><BathtubIcon/>bd { house.bathroom }</p>
 </div>

        <p> {house.location}</p>

        <p>{house.address}</p>


        <p>{house.description}</p>
        
        </>
    )

  

}


export default Details