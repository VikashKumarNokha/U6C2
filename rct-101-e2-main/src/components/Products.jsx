import React, { useState, useEffect } from "react";
import AddProduct from "./AddProduct";
import Product from "./Product";
import Pagination from "./Pagination";
 import axios from "axios";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const Flex = () => <div />;
  const Grid = () => <div />;
     const [todo,setTodo] = useState([]);
     const [page,setPage] = useState(1);
     const [item, setItem] = useState(3);
     useEffect(()=>{
      axios.get(`http://localhost:8080/produts?_page=${page}&_limit=3`).then(({data})=>{
        setTodo(data);   
         console.log(data);
      });   
    },[page]);

     

  return (
    <Flex>
      {/*  AddProduct */}
      <AddProduct />
      <Grid>{/* List of Products */}
         <Product Toto={todo}/>
      </Grid>

      {/* Pagination */}
      <Pagination/>
    </Flex>
  );
};

export default Products;
