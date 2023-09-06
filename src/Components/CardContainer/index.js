import React from 'react';
 import Grid from '@mui/system/Unstable_Grid/Grid';
 import Card from '../Cards';
 
 const CardContainer = ({houses}) => {
  return (
    <Grid container spacing={{ xs: 2, md: 12 }} columns={{ xs: 4, sm: 8, md: 12}}>
    {houses.map(house => (
        <Grid item key={house.id} xs={12} sm={4} md={4} lg={4}>
        <Card house={house} />
        </Grid>
    ))}
  </Grid>
  )
 }

export default CardContainer