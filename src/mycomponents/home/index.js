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

      const fetchAllData = async () => {
        const response = await axios.get("https://dummyjson.com/products");
        console.log(response.data);
        setProducts(response.data.products);
        setShowing("All");
      };

      
      // eslint-disable-next-line
      useEffect(() => {
          fetchAllData();
        }, []);
  

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
