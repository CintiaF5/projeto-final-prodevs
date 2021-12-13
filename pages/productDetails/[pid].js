import Head from "next/head";
import React, { useState, useEffect } from "react";
import NavBar from "../_components/nav-bar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Card from "@mui/material/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Box from "@material-ui/core/Box";
import Rating from "@mui/material/Rating";
import TabsProductDetails from "../_components/tabsProductDetails";
import { Button } from "@mui/material";
import Link from "next/link";
import LoopIcon from "@material-ui/icons/Loop";
import { useRouter } from "next/router";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

const axios = require("axios");

export default function ProductDetails() {
  const [value, setValue] = useState(2);

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { pid } = router.query;

  async function getAPIResponse() {
    setIsLoading(true);
    const response = await axios.get(`https://api.npoint.io/${pid}`);
    setProduct(response.data.payload);
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
        {isLoading ? (
          <div className="loading">
            Carregando<LoopIcon></LoopIcon>
          </div>
        ) : (
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
                <h2 className="title-page2">Detalhes do Produto</h2>
              </Typography>
            </Container>
            <Card sx={{ maxWidth: 345, margin: 3, padding: "50px", m: "25px" }}>
              <CardMedia
                component="img"
                height="140"
                image={product.images}
                alt="foto do móvel"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <s>DE: R$ {product.value}</s>
                  <br></br>
                  POR: R$ {product.originalValue}
                  <br></br>
                  <br></br>
                  {product.description}
                  <br></br>
                  <br></br>
                </Typography>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Typography component="legend">Avaliação</Typography>
                  <Rating
                    name="simple-controlled"
                    value={product.rating}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
              </CardContent>
              <CardActions>
                <Button variant="contained">
                  <ShoppingCartIcon></ShoppingCartIcon>Adicionar ao carrinho
                </Button>
              </CardActions>
            </Card>
            <Container maxWidth="">
              <Typography
                component="div"
                style={{
                  backgroundColor: "#e9e9e9",
                  height: "80vh",
                  padding: "5px",
                }}
              >
                <h2 className="title-page2">Descrição do produto</h2>
                <TabsProductDetails product={product}></TabsProductDetails>
              </Typography>
            </Container>
          </>
        )}
        <div>
          <br></br>
          <Link href="/checkout">
            <Button variant="contained">PROXIMA PAGINA</Button>
          </Link>
          <footer>
            <InstagramIcon></InstagramIcon>
            <TwitterIcon></TwitterIcon>
            <FacebookIcon></FacebookIcon>
            <br></br>© 2021 CASA DA JOANINHA
          </footer>
        </div>
      </div>
    </div>
  );
}
