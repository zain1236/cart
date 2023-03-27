import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

export default function Product(props) {
    return (

      <Card sx={{ position: 'relative',maxWidth: 345 , height : 400}}>
        <CardActionArea>

          <CardMedia
            component="img"
            height="140"
            image = {props.thumbnail}
            alt="green iguana"
          />

          <CardContent>
            
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            
            <Typography variant="body2" color="text.primary">
             ${props.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {props.stock} in stock
            </Typography>
          </CardContent>

        </CardActionArea>


        <CardActions style={{ position: 'absolute', bottom: '0' }}>


        <Link to={`/product/${props.id}`} >
            <Button size="small" color="primary" startIcon={ <AddShoppingCartIcon /> } >
              Add to cart 
            </Button>
          </Link>
        </CardActions>
      </Card>
    );
  }