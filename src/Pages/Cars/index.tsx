
import React, { Suspense } from 'react';
import Loader from '../../Common/loader';
import DashboardCounter from "../../Components/cars";
function Cars() {
    
    return ( 
        <Suspense fallback={<Loader />}>
        <DashboardCounter />
        </Suspense>
     );
}

export default Cars;