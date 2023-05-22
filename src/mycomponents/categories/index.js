import React, { useState, useEffect,useContext } from "react";
import axios from "axios";
import "./.css";
import { ProductContext } from '../context/index';
import {useNavigate } from "react-router-dom";


const CategorySlider = (props) => {

    const { setProducts } = useContext(ProductContext);
    const [categories,setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
          let config = {
            headers: {
              'Authorization': 'Bearer ' + process.env.REACT_APP_TOKEN
            }
          }
          const url = process.env.REACT_APP_URL + "/products/categories";
          const response = await axios.get(url,config);
          setCategories(response.data.data);
        };
        fetchData();
      }, []);

     const handleCategory = async (category) => {

      navigate("/");
      let config = {
        headers: {
          'Authorization': 'Bearer ' + process.env.REACT_APP_TOKEN
        }
      }
      const url = process.env.REACT_APP_URL + "/products/category?products=" + category;
      const response = await axios.get(url,config);

      props.setShowing(category);
      setProducts(response.data.data);
      setActiveCategory(category);
    }
    

  return (
    <div className="scroll-menu">
    
        {
            categories.map( (category) => {
                return ( 
                    <div  
                        onClick={()=>handleCategory(category)} 
                        id="category" 
                       
                        className={`scroll-menu__item ${activeCategory === category ? "active" : ""}`}
                        
                    > 
                          {category} 
                    
                    </div> 
                  
                  )
            })
        
        }
    </div>
  );
};

export default CategorySlider;
