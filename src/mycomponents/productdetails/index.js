import { Button, Input } from '@mui/material';
import React, { useState,useContext } from 'react';
import { useParams } from 'react-router-dom';
import SimpleImageSlider from "react-simple-image-slider";
import { ProductContext } from '../context';
import './.css'
export default function ProductDetails(props) {
    const { id } = useParams();
    const [quantity,setQuantity] = useState(0);

    const { cart, addProductToCart } = useContext(ProductContext);


    async function getProductById(products, id) {
        return products.find(product => product._id === parseInt(id));
    }
    
    var p = getProductById(props.products,id);
    // console.log("prod",p);

   

    function Addcart(){
        addProductToCart(p,parseInt(quantity));
        console.log("cart",cart);
    }
  return (
    <div className='description'>

        <h2>{p.title}</h2>
 
        <div  className='show' >

            <div className = 'slider'>
                <SimpleImageSlider
                    
                    width={500}
                    height={500}
                    
                    images={p.images}
                    showNavs={true}
                
                />
            </div>


            <div class="product-details">
            <span class="product-details__price">${p.price}</span>
            <span class="product-details__description"> {p.description} </span>
            <span class="product-details__rating"> Rating : {p.rating}</span>
            <span class="product-details__stock">In Stock : {p.stock}</span>
            <span class="product-details__brand">Brand : {p.brand} </span>
            <span>Quantity : <Input 
                style={{width : '30px'}}
                value={quantity}
                onChange={(e)=>{setQuantity(e.target.value)}}
            />


            </span>


            <Button onClick={()=>Addcart()} variant='outlined' color='secondary'>
                Add to Cart
            </Button>
            </div>

        </div>

    </div>
  )
}

