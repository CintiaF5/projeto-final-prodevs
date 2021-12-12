import Head from "next/head";
import React, { useState, useEffect } from "react";
import NavBar from "./_components/nav-bar";
import ProductPage from "./_components/productPage";
import LoopIcon from "@material-ui/icons/Loop";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const axios = require("axios");

export default function ShopList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getAPIResponse() {
    setIsLoading(true);
    const response = await axios.get(
      "https://api.npoint.io/8c1f1e1303f606bc225b"
    );
    setProducts(response.data.payload);
    setIsLoading(false);
  }

  useEffect(() => {
    getAPIResponse();
  }, []);

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
          <h2 className="title-page2">Nossos produtos</h2>
        </Typography>
      </Container>
        {isLoading ? (
          <div className="loading">
            Carregando<LoopIcon></LoopIcon>
          </div>
        ) : (
          <div className="product">
            {products.map((product) => {
              return <ProductPage product={product}></ProductPage>;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
