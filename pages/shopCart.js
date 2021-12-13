import Head from "next/head";
import React from "react";
import NavBar from "./_components/nav-bar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

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
              <h2 className="title-page2">Carrinho</h2>
            </Typography>
          </Container>
          <Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img alt="produto" src="" />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Standard license
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Full resolution 1920x1080 • JPEG
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ID: 1030114
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ cursor: "pointer" }} variant="body2">
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" component="div">
                    $19.00
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
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
