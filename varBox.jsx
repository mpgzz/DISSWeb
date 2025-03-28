import {useState} from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function VarB(){
    const[nom, ponNom]=useState('');
    const[temp,ponTemp]=useState('');
    const [mostNom, ponMostNom]=useState(false);
    const cambBoton=()=>{
        ponNom(temp);
        ponMostNom(true);
    
    };

    return(
        <div>
            <Box sx={{position:'absolute',left:'25%',border:'2px solid black',borderRadius:'5px',backgroundColor:'white',
          margin:'30px', width:'50%'}}>
            <Typography sx={{fontSize:'50px',color:'black'}}>Bienvenido, {mostNom ? nom : '...'}!</Typography>
            <Typography sx={{color:'gray'}}>Puede cambiar su nombre cuantas veces quiera.</Typography>
            </Box>
            
            <div className="card">
            <input 
          type="text" 
          value={temp} 
          onChange={(x) => ponTemp(x.target.value)} 
          placeholder="Escribe tu nombre"

        />
        <button onClick={cambBoton}
        style={{
           
            marginTop:'130px'
        }}>
          Aceptar
        </button>
            </div>
        </div>
    );
}
export default VarB;