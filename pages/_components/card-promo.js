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
        height="140"
        src="./img/bela-poltrona.jpg"
        alt="poltrona"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          20% de desconto
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cadeira confortável e estilosa para deixar seu ambiente lindo e aconchegante
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">DETALHES</Button>
        <Button variant="contained">COMPRAR</Button>
      </CardActions>
    </Card>
  );
}