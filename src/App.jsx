import { Box, Typography } from '@mui/material';

import './App.css';

import ResponsiveAppBar from '../menuButton';
import VarB from '../varBox';
import BasicButtons from '../textAlignButton';

function App() {
  return (
    <>
      <ResponsiveAppBar className="ResponsiveAppBar" />
     
      <Box sx={{
        border: '2px solid black', borderRadius: '5px', backgroundColor: 'black',
        margin: '20px', width: '100%'
      }}>
        <h1 className="nomAct">M7 Práctica React</h1>
      </Box>

      <VarB />

      <h3 className="read-the-docs">
        Este es un fragmento del texto Lorem Ipsum. Con los siguientes botones podrá seleccionar el alineamiento preferido:
      </h3>
      
      <BasicButtons />

      <div style={{
        marginTop: '350px', width: '100%', textAlign: 'center', 
        color: 'gray', padding: '10px', fontSize: '15px'
      }}>
        <Typography>Por Michelle González, A00837313 | Desarrollo de Software</Typography>
      </div>
    </>
  );
}

export default App;
