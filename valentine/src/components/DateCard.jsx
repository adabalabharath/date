import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react'
import { AcceptanceContext } from '../context/AcceptanceContextProvider.jsx'
const DateCard = () => {
   const [Yes, setYes] = useState('Yes')
   const [No, setNo] = useState('No')
   const [noCount, setNoCount] = useState(0)
   const {setAcceptance } = React.useContext(AcceptanceContext);
    const handleYes = () => {
       setAcceptance(true)
    }
    const handleNo = () => {
       setAcceptance(false)
       const newCount = noCount + 1
       setNoCount(newCount)
       if(newCount===1){
         setYes("Please Say Yes")
         setNo("ughhh,No")
       }else if(newCount===2){
         setYes("Please,Please Say Yes")
         setNo("No,No,No") }
         else if(newCount===3){
            setYes("yes")
         }
    }
  return (
     <Card sx={{p:5,borderRadius:10}}>
    <CardContent>
      <Typography variant="h5" component="div" style={{ fontStyle: 'italic', fontWeight: 600, fontFamily: 'monospace' }}>{noCount===3? 'Haha, u dont have a choice':'can we go on a date cutie?'}</Typography>

    </CardContent>
    <CardActions style={{ display:'flex',alignItems: 'center',justifyContent: 'center' }}>
       <Button style={{ fontStyle: 'italic', fontWeight: 600, fontFamily: 'monospace',background:' red' }} variant='contained' onClick={handleYes}>{Yes}</Button>
      {noCount!=3 && <Button style={{ fontStyle: 'italic', fontWeight: 600, fontFamily: 'monospace',background:' pink' }} variant='contained' onClick={handleNo}>{No}</Button>}
    </CardActions>
  </Card>
  )
}

export default DateCard