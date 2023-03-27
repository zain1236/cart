import React from "react";
import { ProductProvider } from "./mycomponents/context";
import Home from "./mycomponents/home";
function App() {

  return (
    <ProductProvider>
        <Home />
    </ProductProvider>
    
  );
}

export default App;
