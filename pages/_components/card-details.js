import * as React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="300"
        image=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Características exclusivas de nossos produtos
        </Typography>
        <Typography variant="body2" color="text.secondary">
          - Todo o material é sustentável<br></br>
          - Handmade<br></br>
          - Selo de qualidade e segurança da Joaninha
        </Typography>
      </CardContent>
      <CardActions>        
        <Button variant="contained">COMPRAR</Button>
      </CardActions>
    </Card>
  );
}