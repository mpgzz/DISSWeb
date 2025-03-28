import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';

import './App.css'

import ResponsiveAppBar from '../menuButton'
import VarB from '../varBox'
import BasicButtons from '../textAlignButton';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ResponsiveAppBar className="ResponsiveAppBar"></ResponsiveAppBar>
     
    <Box sx={{border:'2px solid black',borderRadius:'5px',backgroundColor:'black',
          margin:'20px',width:'100%'
        }}>
      <h1 className="nomAct">M7 Práctica React</h1>
      </Box>
      <VarB></VarB>
      
      <h3 className="read-the-docs">
        Este es un fragmento del texto Lorem Ipsum. Con los siguientes botones podrá seleccionar el alineamiento preferido:
      </h3>
      <BasicButtons></BasicButtons>
      <div  style={{marginTop:'350px', width:'100%', textAlign:'center', 
      color:'gray', padding: '10px',fontSize:'15px'}}>
      <Typography>Por Michelle González, A00837313 | Requerimientos de Software</Typography>
      </div>
    </>
   

  )
}

export default App
