
import React, { Suspense, useState } from 'react';
import Loader from '../../Common/loader';
import DashboardCounter from "../../Components/cars";
function Cars() {
    const[CarsList,setCarsList]=useState([])
    return ( 
        <Suspense fallback={<Loader />}>
        <DashboardCounter />
        </Suspense>
     );
}

export default Cars;