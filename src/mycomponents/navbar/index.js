import React,{useState,useContext} from 'react';
import axios from "axios";
import "./.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Input } from '@mui/material';
import { ProductContext } from '../context/index';
import { useNavigate,Link } from "react-router-dom";

export const Navbar = (props) => {

  const { cart,setProducts } = useContext(ProductContext);
  const [search,setSearch] = useState();
  const navigate = useNavigate();


  const searchProduct = async () => {

    let config = {
      headers: {
        'Authorization': 'Bearer ' + process.env.REACT_APP_TOKEN
      }
    }
    const url = process.env.REACT_APP_URL + "/products/search?q=" +search;

    const response = await axios.get(url,config);
    props.setShowing(search);
    setProducts(response.data.data);
  }


  return (
    <div class="navbar">
      
      <div class="navbar-left">
        <span>
            <img src='https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-design_460848-13919.jpg?w=1480&t=st=1679879992~exp=1679880592~hmac=06a10bd936af93af4e942d521cec06c6d78a4740dec96c665c78e05583128ca7'
              height={20}
              alt="logo"
              />
        </span>

        &nbsp;
        <Input 
          placeholder='Search Product'
          onChange={(e)=>{setSearch(e.target.value)}}
        />
        <Button onClick={()=>searchProduct()} color='info'> Search </Button>

        <Button onClick={()=>props.fetchAllData()} > Show All </Button>
      </div>

      <div class="navbar-center">
        <ul>
          
          <li onClick={()=>navigate("/")}>
              <h2>My Ecommerce Store</h2>
          </li>
        </ul>
      </div>

      <div class="navbar-right">

        <Link to="/cart">
          <Button size="large" startIcon={ <ShoppingCartIcon /> } >
            {cart.length}
          </Button>
        </Link>
      </div>

    </div>
  )
}
