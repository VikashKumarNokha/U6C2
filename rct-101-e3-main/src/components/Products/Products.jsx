import React, { useState } from "react";
 import Product from "./Product/Product";
import  axios  from "axios"; 
import { useEffect } from "react";


const Products = () => {
   const [data,setData] = useState([]);
   async function getUser() {
    try {
      const response = await axios.get("http://localhost:8080/products");
      console.log("res: ", response.data);
       setData(response.data);
    } catch (error) {
       console.error(error);
    }
  }
   useEffect(()=>{
   
    getUser();
  },[]);
    
  return <div>
    products
     <Product props ={data}/>
    {/* Code here */}</div>;
};

export default Products;
