import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import backgroundImage from './assets/43MW.gif'
import Card from '@mui/material/Card';
import { Button, CardActions, CardContent, Typography } from '@mui/material'
import DateCard from './components/DateCard'
import { AcceptanceContext } from './context/AcceptanceContextProvider'
import AcceptedCard from './components/AcceptedCard'
function App() {
 const {acceptance}= useContext(AcceptanceContext)
  
  return (
   <>
   <img src={backgroundImage}  alt="Background"  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    zIndex: -1
  }}/>
  { acceptance ? <AcceptedCard/>:<DateCard />}
   </>
  )
}

export default App
