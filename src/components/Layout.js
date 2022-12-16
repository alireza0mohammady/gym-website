import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = () => {
   return ( 
      <section className="">
         <div className="custom-bg-gray fixed w-screen h-screen top-0 -z-50"></div>
         <Header/>
         <Outlet/>
         <Footer/>
      </section>
    );
}
 
export default Layout;