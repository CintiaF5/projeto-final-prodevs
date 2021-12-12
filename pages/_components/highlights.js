import * as React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 297,
          height: 190,     
          margin: 20,    
        },
      }}
    >
      <Paper elevation={3}>      
      <br></br>Os melhores preços para o seu bolso
      <br></br>
      <Button variant="contained">COMPRAR</Button>
      </Paper> 

      <Paper elevation={3}>      
      <br></br>Programa de pontos ao cliente
      <br></br>
      <Button variant="contained">COMPRAR</Button>
      </Paper> 

      <Paper elevation={3}>      
      <br></br>Certificado de compra segura
      <br></br>
      <Button variant="contained">COMPRAR</Button>
      </Paper> 

      <Paper elevation={3}>      
      <br></br>Certificado de qualidade da Joaninha
      <br></br>
      <Button variant="contained">COMPRAR</Button>
      </Paper> 

    </Box>
  );
}