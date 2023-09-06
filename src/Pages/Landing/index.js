import React,{useState, useEffect}  from 'react';
import CardContainer from '../../Components/CardContainer';
import Card from '../../Components/Hero/index'
const Landing = ()=> {
    const [data, setData] = useState([]);
    useEffect(() => {
        // api
        fetch('https://my-json-server.typicode.com/Noura2001/moak-api/house')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('ERROR', error));
    }, []);
    return <>
 <Card/>
   {console.log(data, 'houses')}
   <h3 style={{
     color:'#000839',
     margin:'50px',
   }}>Top-rated</h3>
        <CardContainer houses={data}/>
    </>
}

export default Landing