import React from 'react'
import kiss from '../assets/ian-and-nina-vampire-diaries-passionate-kissing-scene-apzzeoyywp2ew5ko.gif'
import { Card, CardContent, Typography } from '@mui/material'
const AcceptedCard = () => {
  return (
   <Card sx={{p:5,borderRadius:10}}>
    <CardContent>
      <Typography variant="h5" component="div" style={{ fontStyle: 'italic', fontWeight: 600, fontFamily: 'monospace' }}>yesss,This could be us</Typography>
       <img src={kiss} alt="Kiss" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
    </CardContent>
  </Card>
  )
}

export default AcceptedCard