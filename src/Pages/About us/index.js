import React from 'react';
import imsgeHero from '../../util/images/2.jpg';
import './style.css';

const AboutAus = () => {
    return (
        <>
            <h1  style={{
               color:'#1B1C57'
              }}>About us</h1>
            <div className='aboutus'>
                <div className='flex-container'>
                 
                    <img className='aboutimg' src={imsgeHero} width={130} alt='' style={{
                        marginRight:'100px',
                        width:"100vw",
                        height:"100vh",
                        gap:"500px"
               
              }}/>
                    
                    <div className='para'>
                
                </div>
                </div>
                
            </div>
            <p  style={{
               color:'#rgba(0, 93, 244, 0.46)',
               marginTop:'30px',
            //    width:'70vw',
            //    height:'20px',
            //    textAlign:'center',
              
               
              }}>Provides up-to-date and reliable information that makes finding the property of your dreams easy and fast. It offers details about residential and commercial properties as well as rental properties all over Palestine. Whether you've just started your search or are ready to make a purchase.</p>
        </>
    )
}

export default AboutAus;
