import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/Assets/Styles/App.css";
import { RouterProvider, useParams } from "react-router-dom";
import router from "./Setup/roues-manage/routes";
import { getProducts } from "./Services/api";
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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
