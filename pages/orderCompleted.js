import Head from "next/head";
import React from "react";
import NavBar from "./_components/nav-bar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export default function Shoplist() {
  return (
    <div>
      <Head>
        <title>Casa da Joaninha</title>
      </Head>
      <header>
        <nav>
          <NavBar></NavBar>
        </nav>
      </header>
      <div>
        <CssBaseline />
        <Container maxWidth="">
          <Typography
            component="div"
            style={{ backgroundColor: "#e9e9e9", height: "20vh" }}
          >
            <h2 className="title-page2">Finalizar o pedido</h2>
          </Typography>
        </Container>
      </div>
      <div>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="success">
            <AlertTitle>Pedido finalizado!</AlertTitle>
            <strong>Em breve a confirmação chegará no seu e-mail. Obrigado!</strong>
          </Alert>
        </Stack>
      </div>
    </div>
  );
}
