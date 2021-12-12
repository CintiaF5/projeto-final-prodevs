import Head from "next/head";
import React from "react";
import NavBar from "./_components/nav-bar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Form from "./_components/form-checkout";
import ListItens from "./_components/list-itens-checkout";

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
              style={{ backgroundColor: "#e9e9e9", height: "20vh" }}
            >
              <h2 className="title-page2">Checkout</h2>
            </Typography>
          </Container>
          <h1></h1>
          <Form></Form>
          <h2>Lista de produtos</h2>
          <ListItens></ListItens>
        </>
      </div>
    </div>
  );
}
