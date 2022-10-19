import React, { useEffect } from "react";

import "../src/Assets/Styles/App.css";
import  "../src/index.css"
import { RouterProvider, useParams } from "react-router-dom";
import router from "./Setup/roues-manage/routes";
import { getProducts } from "./Services/api";
import SideBar from "./Layouts/components/sidebar";
import Roots from "./roots";
// useEffect(()=>{}) componentdidmount / componentdidupdate
// useEffect(()=>{},[]) componentdidmount
// useEffect(()=>{},[//]) componentdidmount / componentdidupdate onchange 3la array

function App() {
  // useEffect(()=>{
  //    getProducts().then((product)=>console.log(product))
  // },[])
  // let param = useParams();
  // console.log(param.id);
  
  return (
    <div className="App">
     <Roots/>
     
    </div>
  );
}

export default App;
