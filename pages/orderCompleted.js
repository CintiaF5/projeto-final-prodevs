import Head from "next/head";
import React from "react";
import NavBar from "./_components/nav-bar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

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
            style={{
              backgroundColor: "#e9e9e9",
              height: "15vh",
              padding: "5px",
            }}
          >
            <h2 className="title-page2">Finalizar pedido</h2>
          </Typography>
        </Container>
      </div>
      <div>
        <Stack sx={{ maxWidth: 1500, margin: 4, px: 70 }}>
          <Alert severity="success">
            <AlertTitle>
              <strong>Pedido finalizado!</strong>
            </AlertTitle>
            Obrigado!
          </Alert>
        </Stack>
        <footer>
          <InstagramIcon></InstagramIcon>
          <TwitterIcon></TwitterIcon>
          <FacebookIcon></FacebookIcon>
          <br></br>© 2021 CASA DA JOANINHA
        </footer>
      </div>
    </div>
  );
}
