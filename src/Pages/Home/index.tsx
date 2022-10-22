import { Link } from "react-router-dom";
import React, { Suspense } from "react";
import DashboardCounter from "../../Components/cars";
import Loader from "../../Common/loader";
import DashboardCardsWrapper from "../../Components/dashboardcardwrapper";
// https://www.figma.com/file/sfhbAjBDDlKrdvthrMA8B4/Bookland_BookStoreEcommerceWebsite_AllPage?node-id=8%3A4716
function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <DashboardCardsWrapper/>
    </Suspense>
    
   
  );
}

export default Home;
