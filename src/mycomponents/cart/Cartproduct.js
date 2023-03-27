import { Button } from '@mui/material';
import React,{useContext} from 'react'
import { ProductContext } from '../context';

export const Cartproduct = () => {

    const { cart, removeProductFromCart ,total} = useContext(ProductContext);
   
  return (
        <div style={{display:'flex'}}>
            <div >
                <h2> My Cart {cart.length} </h2>
                {
                    cart.map( (p) => {
                        return(

                            <div >

                                <div style={{width : '50%'}}>
                                    <hr/>
                                    <span>
                                    
                                    <h2> {p.product.title}</h2>
                                    <img width={300} height={300} src={p.product.thumbnail} alt="img" />
                                    <br/>
                                    Quantity : {p.quantity}
                                    <br/>
                                    <Button variant='filled' color='danger' onClick={()=>removeProductFromCart(p.product.id)}>Remove</Button>

                                    </span>
                                </div>
                        </div>
                        )
                    })
                }
            </div>

            <div>
                <h2> Order Summary</h2>
                <span> <h6>Subtotal {total} </h6></span>
                <span> <h6>Est.Shipping $6.95 </h6></span>
                <span> <h6>Total 0 </h6></span>
            </div>
        </div>
  )
}
