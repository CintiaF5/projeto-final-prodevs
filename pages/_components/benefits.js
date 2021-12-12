import * as React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import SecurityIcon from "@material-ui/icons/Security";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import CardMedia from "@mui/material/CardMedia";

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 297,
          height: 200,
          margin: 20,
        },
      }}
    >
      <Paper elevation={6}>
        <CardMedia
          component="img"
          alt="produto"
          height="130"
          image="https://uploaddeimagens.com.br/images/003/583/432/full/CASA_DA_JOANINHA_%286%29.png?1639353327"
        />
        <ShoppingCartIcon color="primary" fontSize="large"></ShoppingCartIcon>
        <br></br>
        <strong>Entrega em todo o Brasil</strong>
      </Paper>

      <Paper elevation={6}>
        <CardMedia
          component="img"
          alt="produto"
          height="130"
          image="https://uploaddeimagens.com.br/images/003/583/429/full/CASA_DA_JOANINHA_%285%29.png?1639353169"
        />
        <MonetizationOnIcon
          color="primary"
          fontSize="large"
        ></MonetizationOnIcon>
        <br></br>
        <strong>Programa de pontos ao cliente</strong>
      </Paper>

      <Paper elevation={6}>
        <CardMedia
          component="img"
          alt="produto"
          height="130"
          image="https://uploaddeimagens.com.br/images/003/583/428/full/CASA_DA_JOANINHA_%284%29.png?1639353107"
        />
        <SecurityIcon color="primary" fontSize="large"></SecurityIcon>
        <br></br>
        <strong>Certificado de compra segura</strong>
      </Paper>

      <Paper elevation={6}>
        <CardMedia
          component="img"
          alt="produto"
          height="130"
          image="https://uploaddeimagens.com.br/images/003/583/422/full/CASA_DA_JOANINHA_%282%29.png?1639352788"
        />
        <LoyaltyIcon color="primary" fontSize="large"></LoyaltyIcon>
        <br></br>
        <strong>Envio com amor</strong>
      </Paper>
    </Box>
  );
}
