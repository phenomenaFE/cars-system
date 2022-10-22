import  { Suspense } from "react";

import Loader from "../../Common/loader";
import DashboardCardsWrapper from "../../Components/dashboardcardwrapper";

function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <DashboardCardsWrapper/>
    </Suspense>
    
   
  );
}

export default Home;
