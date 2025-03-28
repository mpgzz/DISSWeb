import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function BasicButtons() {
  const [alin, ponAlin]=React.useState('center');
  const cambAlin=(novAlin)=>{
    ponAlin(novAlin); 
  };

  const currAlin = {
    backgroundColor:'lightblue',
    color:'white',
  };

  return (
    <div>
      <Box sx={{position:'absolute',left:'10%',border:'4px solid blue',borderRadius:'5px',backgroundColor:'gray',
          margin:'20px', width:'75%',padding:'20px'}}>

      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'100pvh',}}>
        <Box sx={{padding:'10px',border:'2px solid black',borderRadius:'5px',backgroundColor:'black',
          margin:'20px,'}}>
    <Stack spacing={2} direction="row">
    <Button
          onClick={()=>cambAlin('left')}
          sx={alin==='left'?currAlin:{}}
        >Izquierda</Button>
        <Button
          onClick={()=>cambAlin('center')}
          sx={alin==='center'?currAlin:{}}>Centro</Button>
        <Button
          onClick={()=>cambAlin('justify')}
          sx={alin==='justify'?currAlin:{}}>Justificado</Button>
        <Button
          onClick={() => cambAlin('right')}
          sx={alin==='right'?currAlin:{}}>
          Derecha
        </Button>
    </Stack>
    </Box>
    </Box>
    <Box
        sx={{
          width:'60%',  
          margin:'0 auto',  
        }}
      >
  <Typography
  sx={{
    textAlign:alin, 
    marginTop:2,
  
  }}
>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Typography>
</Box>
</Box>
</div>
  );
}