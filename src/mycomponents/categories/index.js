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
          const response = await axios.get("https://dummyjson.com/products/categories");
          setCategories(response.data);
        };
        fetchData();
      }, []);

     const handleCategory = async (category) => {

      navigate("/");
      const response = await axios.get("https://dummyjson.com/products/category/"+category);

      props.setShowing(category);
      setProducts(response.data.products);
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
