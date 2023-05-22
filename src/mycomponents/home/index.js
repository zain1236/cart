import React, { useState, useEffect,useContext } from "react";
import axios from "axios";
import Product from "../productcard";
import { Navbar } from "../navbar";
import CategorySlider from '../categories';
import "./.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "../productdetails";
import { ProductContext } from '../context/index';
import { Cartproduct } from "../cart/Cartproduct";

export default function Home() {

      const { products, setProducts } = useContext(ProductContext);
      const [showing,setShowing] = useState();
      const [fetched,setFetched] = useState(false);

      const fetchAllData = async () => {
        let config = {
          headers: {
            'Authorization': 'Bearer ' + process.env.REACT_APP_TOKEN
          }
        }
        const url = process.env.REACT_APP_URL + "/products";
  
        const response = await axios.get(url,config);
        // console.log(response.data);
        setProducts(response.data.data);
        setShowing("All");
      };

      
      // eslint-disable-next-line
      useEffect(() => {
          if (fetched === false) {
            fetchAllData();
            setFetched(true);
          }
          
        });
  

      return (
        <div>
    
        
          <BrowserRouter>
            <Routes>
                <Route 
                  exact path="/"
                  element = {
                    <div>
                    <Navbar setShowing={setShowing} fetchAllData={fetchAllData}/>
                    <CategorySlider  setShowing={setShowing} />
                    <div>
                    <div className="showing-t-shirts">
                      <h2 className="showing-t-shirts__title">Showing {showing}</h2>
                    </div>
        
                    <div id="products" style={{display : 'flex' , flexWrap: 'wrap',justifyContent: 'center',padding:'20px'}}>
                          {
                              products.map( (product) => {
                                  return (
                                      <div style={{flex: '1 1 160px',margin : '10px'}}>
                                          <Product {...product}/>
                                      </div>
                                  )
                              })
                          }
        
              
              
                    </div>
        
                    </div>
                    </div>
                  }
                />

                <Route 
                  path="/product/:id"
                  element = {
                      <div>
                        <Navbar setShowing={setShowing} fetchAllData={fetchAllData}/>
                        <CategorySlider  setShowing={setShowing} />
                        <ProductDetails products={products} />  
                      </div>                  
                  }
                />

<Route 
                  path="/cart"
                  element = {
                      <div>
                        <Navbar setShowing={setShowing} fetchAllData={fetchAllData}/>
                        <CategorySlider  setShowing={setShowing} />
                        <Cartproduct />
                      </div>                  
                  }
                />
            </Routes>
          </BrowserRouter>


        </div>
      );
}
