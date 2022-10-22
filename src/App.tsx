import React, { useEffect } from "react";

import "../src/Assets/Styles/App.css";
import "../src/index.css";
import {
  Outlet
} from "react-router-dom";

import SideBar from "./Layouts/components/sidebar";
import NavBar from "./Layouts/components/navbar";
// import router from "./Setup/routes";

import Footer from "./Layouts/components/footer";

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
      <div className="main_page flex flex-row ">
        <div className="side-bar">
          <SideBar />
        </div>
        <div className="main_page_content ">
          <NavBar />
          <div className="mx-auto max-w-7xl py-4 px-2 sm:px-5 lg:px-9">
            <Outlet />
          </div>
         
        </div>
       
      </div>
      <Footer/>
    </div>
  );
}

export default App;
