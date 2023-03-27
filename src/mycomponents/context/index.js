import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total,setTotal] = useState(0);

  const getTotal = () => {
    var tot =0;
    for (let index = 0; index < cart.length; index++) {
      const p = cart[index];
      var t = p.product.price * p.quantity;
      tot += t;
    }
    setTotal(tot);
    return tot;

  }
  const addProductToCart = (product, quantity) => {
    const itemIndex = cart.findIndex((item) => item.product.id === product.id);

    const productIndex = products.findIndex((p) => p.id === product.id);
    const updatedProduct = [...products];

    if ( updatedProduct[productIndex].stock >= quantity ){
      updatedProduct[productIndex].stock -= quantity;


      if (itemIndex >= 0) {
        const updatedCart = [...cart];
        updatedCart[itemIndex].quantity += quantity;
        setCart(updatedCart);
      } else {
        setCart([...cart, { product: product, quantity: quantity }]);
      }
    }
  };

 
  const removeProductFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.product.id !== productId);
    setCart(updatedCart);
  };

  const getProductById = (id) => {
    return products.find((product) => product.id === id);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
        addProductToCart,
        removeProductFromCart,
        getProductById,
        total,
        getTotal

      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

