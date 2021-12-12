import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Link from 'next/link';

export default function ProductPage(props) {
  const [value, setValue] = React.useState(2);
  const product = props.product;

  return (
    <> 
      <Link href={`/productDetails/${product.id}`}>   
      <Card sx={{ maxWidth: 345, margin: 3 }}>
        <CardMedia
          component="img"
          height="140"
          image={product.images[0]}
          alt="Foto do produto"
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
          <FavoriteBorderIcon></FavoriteBorderIcon>
          <ZoomInIcon></ZoomInIcon>
          <ShoppingCartIcon></ShoppingCartIcon>        
        </CardActions>
      </Card>
    </Link>  
    </>
  );
}
