import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, CardHeader } from "@material-ui/core/";
import { Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(),
  },
}));

export default function MultiActionAreaCard() {
  const classes = useStyles();
  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardHeader title="Mesa de centro" />
            <CardMedia
              component="img"
              alt="produto"
              height="250"
              image="https://uploaddeimagens.com.br/images/003/583/395/full/cadeiras.jpg?1639350998"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                <s>DE: R$ 524,70 </s>
                <br></br>
                POR: R$ 239,90
                <br></br>
                <br></br>
                <Button variant="contained">COMPRAR</Button>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardHeader title="Jogo de almofadas" />
            <CardMedia
              component="img"
              alt="produto"
              height="250"
              image="https://uploaddeimagens.com.br/images/003/583/405/full/almofadas.jpg?1639351847"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                <s>DE: R$ 240,96 </s>
                <br></br>
                POR: R$ 96,30
                <br></br>
                <br></br>
                <Button variant="contained">COMPRAR</Button>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardHeader title="Mesa cozinha" />
            <CardMedia
              component="img"
              alt="produto"
              height="250"
              image="https://uploaddeimagens.com.br/images/003/583/410/full/mesa.jpg?1639351970"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                <s>DE: R$ 1.350,30 </s>
                <br></br>
                POR: R$ 650,20
                <br></br>
                <br></br>
                <Button variant="contained">COMPRAR</Button>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardHeader title="Sofá seda" />
            <CardMedia
              component="img"
              alt="produto"
              height="250"
              image="https://uploaddeimagens.com.br/images/003/583/412/full/sofa.jpeg?1639352090"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                <s>DE: R$ 2.230,00 </s>
                <br></br>
                POR: R$ 1.320,30
                <br></br>
                <br></br>
                <Button variant="contained">COMPRAR</Button>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
