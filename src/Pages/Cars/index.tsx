
import React, { useState } from 'react';
import DashboardCounter from "../../Components/cars";
function Cars() {
    const[CarsList,setCarsList]=useState([])
    return ( 
        <DashboardCounter />
     );
}

export default Cars;