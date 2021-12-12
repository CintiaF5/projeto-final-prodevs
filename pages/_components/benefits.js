import * as React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import SecurityIcon from "@material-ui/icons/Security";
import LoyaltyIcon from "@material-ui/icons/Loyalty";

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
      <Paper elevation={6}>
      <ShoppingCartIcon color="primary" fontSize='large'></ShoppingCartIcon>
      <br></br>Os melhores preços para o seu bolso
      </Paper> 

      <Paper elevation={6}>
      <MonetizationOnIcon color="primary" fontSize='large'></MonetizationOnIcon>
      <br></br>Programa de pontos ao cliente
      </Paper> 

      <Paper elevation={6}>
      <SecurityIcon color="primary" fontSize='large'></SecurityIcon>
      <br></br>Certificado de compra segura
      </Paper> 

      <Paper elevation={6}>
      <LoyaltyIcon color="primary" fontSize='large'></LoyaltyIcon>
      <br></br>Certificado de qualidade da Joaninha
      </Paper> 

    </Box>
  );
}