import { RouterProvider } from "react-router-dom";
import NavBar from "./Layouts/components/navbar";
import SideBar from "./Layouts/components/sidebar";
import router from "./Setup/roues-manage/routes";

function Roots() {
  return (
    <div className="main_page flex flex-row ">
      <div className="side-bar">
        <SideBar />
      </div>
      <div className="main_page_content ">
        <NavBar />
           <div className="mx-auto max-w-7xl py-4 px-2 sm:px-5 lg:px-9">
           <RouterProvider router={router} />
           </div>
       
      </div>
    </div>
  );
}

export default Roots;
