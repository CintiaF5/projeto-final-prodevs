import Head from "next/head";
import React from "react";
import NavBar from "./_components/nav-bar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Form from "./_components/form-checkout";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Button } from "@mui/material";
import Link from "next/link";

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
        <>
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
              <h2 className="title-page2">Checkout</h2>
            </Typography>
          </Container>
          <h1></h1>
          <Form></Form> 
          <br></br>    
          <br></br>
          <Link href="/orderCompleted">
            <Button variant="contained">Confirmar pagamento</Button>
          </Link>          
        </>
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
